// Import necessary modules and components for testing
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

// Test case to check if ProductList component renders correctly
test('renders ProductList component', () => {
  // Render the ProductList component within the ShoppingCartProvider and MemoryRouter
  render(
    <ShoppingCartProvider>
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </ShoppingCartProvider>
  );

  // Check if the "Product List" heading is rendered
  const productListHeading = screen.getByText('Product List');
  // Assert that the heading element is in the document
  expect(productListHeading).toBeInTheDocument();
});