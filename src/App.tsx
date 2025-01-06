import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { ThemeProvider } from './contexts/theme-context';
import { Categories } from './pages/categories/categories';
import { Dashboard } from './pages/dashboard/dashboard';
import { Orders } from './pages/orders/orders';
import { Products } from './pages/products/products';

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
