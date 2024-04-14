import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping App/i);
  expect(linkElement).toBeInTheDocument();
});
