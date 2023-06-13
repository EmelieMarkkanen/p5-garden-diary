import React from 'react';
import { render } from '@testing-library/react';
import Asset from '../Asset';

test('renders spinner when `spinner` prop is true', () => {
  const { container } = render(<Asset spinner={true} />);
  const spinner = container.querySelector('.spinner-border');
  expect(spinner).toBeInTheDocument();
});

test('does not render spinner when `spinner` prop is false', () => {
  const { container } = render(<Asset spinner={false} />);
  const spinner = container.querySelector('.spinner-border');
  expect(spinner).toBeNull();
});

test('renders image when `src` prop is provided', () => {
    const src = 'image.jpg';
    const message = 'Sample message';
    const { getByRole } = render(<Asset src={src} message={message} />);
    const image = getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe(src);
  });
  

test('does not render image when `src` prop is not provided', () => {
  const { container } = render(<Asset />);
  const image = container.querySelector('img');
  expect(image).toBeNull();
});

test('renders message when `message` prop is provided', () => {
  const message = 'This is a test message';
  const { getByText } = render(<Asset message={message} />);
  const messageElement = getByText(message);
  expect(messageElement).toBeInTheDocument();
});

test('does not render message when `message` prop is not provided', () => {
  const { container } = render(<Asset />);
  const messageElement = container.querySelector('p');
  expect(messageElement).toBeNull();
});
