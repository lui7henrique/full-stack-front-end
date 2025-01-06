import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../../contexts/theme-context';
import { getGetProductsResponseMock } from '../../generated/products';
import { Products } from './products';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockProducts = getGetProductsResponseMock();

queryClient.setQueryData(['/products'], mockProducts);

const meta: Meta<typeof Products> = {
  title: 'Pages/Products',
  component: Products,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div style={{ padding: '20px' }}>
            <Story />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const manyProducts = Array.from({ length: 20 }, () => getGetProductsResponseMock()[0]).map(
        (product) => {
          return {
            ...product,
            imageUrl: `https://picsum.photos/seed/${Math.random()}/200/200`,
          };
        },
      );

      queryClient.setQueryData(['/products'], manyProducts);
      return <Story />;
    },
  ],
};

export const Empty: Story = {
  decorators: [
    (Story) => {
      queryClient.setQueryData(['/products'], []);

      return <Story />;
    },
  ],
};
