import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { CreateProductDto, Product } from '../../generated/endpoints.schemas';
import { useUploadProductImage } from '../../generated/products';

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateProductDto) => void;
  product?: Product;
}

export function ProductDialog({ open, onClose, onSubmit, product }: ProductDialogProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const { mutateAsync: uploadImage } = useUploadProductImage();

  const { register, handleSubmit, reset } = useForm<CreateProductDto>({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
    },
  });

  useEffect(() => {
    if (!open) {
      reset({
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
      });
      setSelectedImage(null);
      setPreviewUrl('');
      return;
    }

    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
      });
      setPreviewUrl(product.imageUrl);
      return;
    }

    reset({
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
    });
    setSelectedImage(null);
    setPreviewUrl('');
  }, [product, reset, open]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleFormSubmit = handleSubmit(async (data) => {
    let imageUrl = product?.imageUrl ?? '';

    if (selectedImage && product?._id) {
      const result = await uploadImage({
        id: product._id,
        data: { file: selectedImage },
      });
      imageUrl = result.imageUrl ?? '';
    }

    onSubmit({
      ...data,
      imageUrl,
    });
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product ? 'Edit Product' : 'Create Product'}</DialogTitle>

      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField {...register('name')} label="Name" fullWidth margin="normal" required />

          <TextField
            {...register('description')}
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />

          <TextField
            {...register('price', { valueAsNumber: true })}
            label="Price"
            fullWidth
            margin="normal"
            type="number"
            required
          />

          {product && (
            <Box sx={{ mt: 2, mb: 2 }}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <Button variant="outlined" component="span">
                  {previewUrl ? 'Change Image' : 'Upload Image'}
                </Button>
              </label>

              {previewUrl && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={previewUrl}
                    alt="Product preview"
                    style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
                  />
                </Box>
              )}
            </Box>
          )}

          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {product ? 'Save' : 'Create'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
