import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import type { CreateProductDto, Product } from '../../generated/endpoints.schemas';
import {
  useCreateProduct,
  useDeleteProduct,
  useGetProductsSuspense,
  useUpdateProduct,
} from '../../generated/products';
import { ProductDialog } from './product-dialog';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: products } = useGetProductsSuspense();

  const { mutate: createProduct } = useCreateProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/products'] });
        handleCloseDialog();
        setSnackbarMessage('Product created successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: updateProduct } = useUpdateProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/products'] });
        handleCloseDialog();
        setSnackbarMessage('Product updated successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: deleteProduct } = useDeleteProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/products'] });
      },
    },
  });

  const handleOpenDialog = (product?: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(undefined);
    setIsDialogOpen(false);
  };

  const handleSubmit = (data: CreateProductDto) => {
    if (!data) return;

    if (selectedProduct) {
      return updateProduct({ id: selectedProduct._id, data });
    }

    return createProduct({ data });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct({ id });
    }
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Products</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Product
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                  <Typography variant="body1" color="text.secondary">
                    No products found. Click "Add Product" to create one.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <a href={product.imageUrl} target="_blank" rel="noopener noreferrer">
                      {product.imageUrl && (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                      )}
                    </a>
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <Button size="small" onClick={() => handleOpenDialog(product)}>
                      Edit
                    </Button>
                    <Button size="small" color="error" onClick={() => handleDelete(product._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <ProductDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        product={selectedProduct}
      />

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1_000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
}
