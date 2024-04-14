// Import necessary modules and components for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from '../components/Checkout';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import { MemoryRouter } from 'react-router-dom';

// Test case to check if form inputs are rendered in Checkout component
test('renders form inputs in Checkout component', () => {
  // Render the Checkout component within the ShoppingCartProvider and MemoryRouter
  render(
    <MemoryRouter>
      <ShoppingCartProvider>
        <Checkout />
      </ShoppingCartProvider>
    </MemoryRouter>
  );

  // Check if the form inputs are rendered
  const nameInput = screen.getByLabelText('Name on Card:');
  expect(nameInput).toBeInTheDocument();

  const cardNumberInput = screen.getByLabelText('Card Number:');
  expect(cardNumberInput).toBeInTheDocument();

  const expiryDateInput = screen.getByLabelText('Expiry Date:');
  expect(expiryDateInput).toBeInTheDocument();

  const cvvInput = screen.getByLabelText('CVV:');
  expect(cvvInput).toBeInTheDocument();
});