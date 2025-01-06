import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { CreateOrderDto } from '../../generated/endpoints.schemas';
import type { Order } from '../../generated/endpoints.schemas';
import { useGetProductsSuspense } from '../../generated/products';

interface OrderDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateOrderDto) => void;
  order?: Order;
}

export function OrderDialog({ open, onClose, onSubmit, order }: OrderDialogProps) {
  const { data: products } = useGetProductsSuspense();

  const { handleSubmit, reset, control, watch } = useForm<CreateOrderDto>({
    defaultValues: {
      productIds: [],
      total: 0,
    },
  });

  const selectedProductIds = watch('productIds');
  const selectedProducts = products.filter((product) => selectedProductIds.includes(product._id));
  const total = selectedProducts.reduce((acc, product) => acc + product.price, 0);

  useEffect(() => {
    if (!open) {
      reset({
        productIds: [],
        total: 0,
      });
      return;
    }

    if (order) {
      reset({
        productIds: order.productIds,
        total: order.total,
      });
      return;
    }

    reset({
      productIds: [],
      total: 0,
    });
  }, [order, reset, open]);

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit({
      ...data,
      total,
    });
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{order ? 'Edit Order' : 'Create Order'}</DialogTitle>

      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <Controller
            control={control}
            name="productIds"
            render={({ field }) => (
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Products</InputLabel>
                <Select {...field} multiple label="Products">
                  {products.map((product) => (
                    <MenuItem key={product._id} value={product._id}>
                      {product.name} - ${product.price}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />

          <Box sx={{ mt: 2 }}>
            <strong>Total: ${total}</strong>
          </Box>

          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {order ? 'Save' : 'Create'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
