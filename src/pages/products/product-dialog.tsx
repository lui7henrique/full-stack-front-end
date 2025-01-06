import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { CreateProductDto, Product } from '../../generated/endpoints.schemas';

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateProductDto) => void;
  product?: Product;
}

export function ProductDialog({ open, onClose, onSubmit, product }: ProductDialogProps) {
  const { register, handleSubmit, reset } = useForm<CreateProductDto>({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
    },
  });

  useEffect(() => {
    if (!open) {
      reset({
        name: '',
        description: '',
        price: 0,
      });
      return;
    }

    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
      });
      return;
    }

    reset({
      name: '',
      description: '',
      price: 0,
    });
  }, [product, reset, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>{product ? 'Edit Product' : 'Create Product'}</DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
