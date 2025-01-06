import {
  Category as CategoriesIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  Inventory as ProductsIcon,
} from '@mui/icons-material';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const DRAWER_WIDTH = 240;

const MENU_ITEMS = [
  { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { text: 'Products', path: '/products', icon: <ProductsIcon /> },
  { text: 'Categories', path: '/categories', icon: <CategoriesIcon /> },
  { text: 'Orders', path: '/orders', icon: <OrdersIcon /> },
];

export function Layout(): JSX.Element {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
