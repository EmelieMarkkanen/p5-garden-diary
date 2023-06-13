import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';


test('displays the "Not Found" message', () => {
  render(<NotFound />, { wrapper: MemoryRouter });

  const message = screen.getByText(/the page you're looking for doesn't exist/i);
  expect(message).toBeInTheDocument();
});

test('renders the "No Results" image', () => {
  render(<NotFound />, { wrapper: MemoryRouter });

  const image = screen.getByAltText(/sorry, the page you're looking for doesn't exist/i);
  expect(image).toBeInTheDocument();
});

test('redirects to the home page when clicking the cactus', () => {
  render(<NotFound />, { wrapper: MemoryRouter });

  const cactusLink = screen.getByAltText(/sorry, the page you're looking for doesn't exist/i).closest('a');

  expect(cactusLink).toHaveAttribute('href', '/');
  
  userEvent.click(cactusLink);

  expect(window.location.pathname).toBe('/');
});
