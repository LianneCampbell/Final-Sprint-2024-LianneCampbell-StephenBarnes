// Import necessary modules and components for testing
import { render, screen } from '@testing-library/react';
import App from '../App';

// Test case to check if App renders correctly
test('renders App link', () => {
  // Render the App component
  render(<App />);
  // Check if the link with text 'Shopping App' is present in the rendered component
  const linkElement = screen.getByText(/Shopping App/i);
  // Assert that the link element is in the document
  expect(linkElement).toBeInTheDocument();
});