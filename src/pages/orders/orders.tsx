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
import type { CreateOrderDto, Order } from '../../generated/endpoints.schemas';
import {
  useCreateOrder,
  useDeleteOrder,
  useGetOrdersSuspense,
  useUpdateOrder,
} from '../../generated/orders';
import { useGetProductsSuspense } from '../../generated/products';
import { OrderDialog } from './order-dialog';

export function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: orders } = useGetOrdersSuspense();
  const { data: products } = useGetProductsSuspense();

  const { mutate: createOrder } = useCreateOrder({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/orders'] });
        handleCloseDialog();
        setSnackbarMessage('Order created successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: updateOrder } = useUpdateOrder({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/orders'] });
        handleCloseDialog();
        setSnackbarMessage('Order updated successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: deleteOrder } = useDeleteOrder({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/orders'] });
      },
    },
  });

  const handleOpenDialog = (order?: Order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedOrder(undefined);
    setIsDialogOpen(false);
  };

  const handleSubmit = (data: CreateOrderDto) => {
    if (!data) return;

    if (selectedOrder) {
      return updateOrder({ id: selectedOrder._id, data });
    }

    return createOrder({ data });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      deleteOrder({ id });
    }
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const getProductNames = (productIds: string[]): string => {
    return productIds
      .map((id) => products.find((product) => product._id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Orders</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Order
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Products</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell>{getProductNames(order.productIds)}</TableCell>
                <TableCell align="right">${order.total.toFixed(2)}</TableCell>
                <TableCell align="right">
                  <Button size="small" onClick={() => handleOpenDialog(order)}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => handleDelete(order._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <OrderDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        order={selectedOrder}
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
