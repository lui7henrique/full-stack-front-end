import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductDialog } from './product-dialog';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const meta: Meta<typeof ProductDialog> = {
  title: 'Components/ProductDialog',
  component: ProductDialog,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  args: {
    open: true,
    onClose: () => {},
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Create: Story = {};

export const Edit: Story = {
  args: {
    product: {
      _id: '1',
      name: 'Sample Product',
      description: 'This is a sample product',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/150',
      categoryIds: [],
      __v: 0,
    },
  },
};
