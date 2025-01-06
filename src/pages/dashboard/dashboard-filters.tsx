import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type { GetDashboardMetricsParams } from '../../generated/endpoints.schemas';
import type { Category, Product } from '../../generated/endpoints.schemas';

interface FilterState extends GetDashboardMetricsParams {}

export const DEFAULT_FILTERS: FilterState = {
  startDate: new Date(new Date().setMonth(new Date().getMonth() - 1))
    .toISOString()
    .split('T')[0],
  endDate: new Date().toISOString().split('T')[0],
  categoryId: undefined,
  productId: undefined,
};

interface DashboardFiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string | undefined) => void;
  onClearFilters: () => void;
  onClose: () => void;
  categories: Category[];
  products: Product[];
}

export function DashboardFilters({
  filters,
  onFilterChange,
  onClearFilters,
  onClose,
  categories,
  products,
}: DashboardFiltersProps) {
  return (
    <Box sx={{ width: 400, p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>

      <TextField
        label="Start Date"
        type="date"
        value={filters.startDate}
        onChange={(e) => onFilterChange('startDate', e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="End Date"
        type="date"
        value={filters.endDate}
        onChange={(e) => onFilterChange('endDate', e.target.value)}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.categoryId ?? ''}
          onChange={(e) => onFilterChange('categoryId', e.target.value || undefined)}
          label="Category"
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Product</InputLabel>
        <Select
          value={filters.productId ?? ''}
          onChange={(e) => onFilterChange('productId', e.target.value || undefined)}
          label="Product"
        >
          <MenuItem value="">All Products</MenuItem>
          {products.map((product) => (
            <MenuItem key={product._id} value={product._id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button variant="outlined" onClick={onClearFilters} fullWidth>
          Clear Filters
        </Button>
        <Button variant="contained" onClick={onClose} fullWidth>
          Close
        </Button>
      </Box>
    </Box>
  );
} 