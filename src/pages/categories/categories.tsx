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
import {
  useCreateCategory,
  useDeleteCategory,
  useGetCategoriesSuspense,
  useUpdateCategory,
} from '../../generated/categories';
import type { Category, CreateCategoryDto } from '../../generated/endpoints.schemas';
import { CategoryDialog } from './category-dialog';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: categories } = useGetCategoriesSuspense();

  const { mutate: createCategory } = useCreateCategory({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/categories'] });
        handleCloseDialog();
        setSnackbarMessage('Category created successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: updateCategory } = useUpdateCategory({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/categories'] });
        handleCloseDialog();
        setSnackbarMessage('Category updated successfully');
        setIsSnackbarOpen(true);
      },
    },
  });

  const { mutate: deleteCategory } = useDeleteCategory({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/categories'] });
      },
    },
  });

  const handleOpenDialog = (category?: Category) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedCategory(undefined);
    setIsDialogOpen(false);
  };

  const handleSubmit = (data: CreateCategoryDto) => {
    if (!data) return;

    if (selectedCategory) {
      return updateCategory({ id: selectedCategory._id, data });
    }

    return createCategory({ data });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      deleteCategory({ id });
    }
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Categories</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Category
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell>{category.name}</TableCell>
                <TableCell align="right">
                  <Button size="small" onClick={() => handleOpenDialog(category)}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => handleDelete(category._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CategoryDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        category={selectedCategory}
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
