// Import necessary modules and components for testing
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductButton from '../components/ProductButton';

// Test case to check if ProductButton renders correctly
test('renders ProductButton link', () => {
  // Render ProductButton component wrapped in MemoryRouter
  render(
    <MemoryRouter>
      <ProductButton productId="1" />
    </MemoryRouter>
  );

  // Check if the button with text 'View Product Details' is present in the rendered component
  const buttonElement = screen.getByText(/View Product Details/i);
  // Assert that the button element is in the document
  expect(buttonElement).toBeInTheDocument();
});