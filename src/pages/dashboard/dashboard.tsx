import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Box,
  Card,
  CardContent,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCategoriesSuspense } from '../../generated/categories';
import { useGetDashboardMetricsSuspense } from '../../generated/dashboard';
import type { GetDashboardMetricsParams } from '../../generated/endpoints.schemas';
import { useGetProductsSuspense } from '../../generated/products';
import { DashboardFilters, DEFAULT_FILTERS } from './dashboard-filters';

interface FilterState extends GetDashboardMetricsParams {}

export function Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<FilterState>(() => {
    const startDate = searchParams.get('startDate') ?? DEFAULT_FILTERS.startDate;
    const endDate = searchParams.get('endDate') ?? DEFAULT_FILTERS.endDate;
    const categoryId = searchParams.get('categoryId') ?? undefined;
    const productId = searchParams.get('productId') ?? undefined;

    return { startDate, endDate, categoryId, productId };
  });

  const { data: metrics } = useGetDashboardMetricsSuspense(filters);
  const { data: categories } = useGetCategoriesSuspense();
  const { data: products } = useGetProductsSuspense();

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.startDate) params.set('startDate', filters.startDate);
    if (filters.endDate) params.set('endDate', filters.endDate);
    if (filters.categoryId) params.set('categoryId', filters.categoryId);
    if (filters.productId) params.set('productId', filters.productId);

    setSearchParams(params);
  }, [filters, setSearchParams]);

  const handleFilterChange = (key: keyof FilterState, value: string | undefined) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    queryClient.invalidateQueries({ queryKey: ['/dashboard/metrics'] });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Dashboard</Typography>
        <IconButton onClick={toggleDrawer}>
          <FilterListIcon />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h4">{metrics.totalOrders ?? 0}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h4">${(metrics.totalRevenue ?? 0).toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Average Order Value
              </Typography>
              <Typography variant="h4">${(metrics.averageOrderValue ?? 0).toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <DashboardFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          onClose={toggleDrawer}
          categories={categories}
          products={products}
        />
      </Drawer>
    </div>
  );
}
