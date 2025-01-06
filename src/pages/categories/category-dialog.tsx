import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { Category, CreateCategoryDto } from '../../generated/endpoints.schemas';

interface CategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateCategoryDto) => void;
  category?: Category;
}

export function CategoryDialog({ open, onClose, onSubmit, category }: CategoryDialogProps) {
  const { register, handleSubmit, reset } = useForm<CreateCategoryDto>({
    defaultValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (!open) {
      reset({ name: '' });
      return;
    }

    if (category) {
      reset({ name: category.name });
      return;
    }

    reset({ name: '' });
  }, [category, reset, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{category ? 'Edit Category' : 'Create Category'}</DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register('name')} label="Name" fullWidth margin="normal" required />

          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {category ? 'Save' : 'Create'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
