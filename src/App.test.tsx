import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Portfolio calculator based on risk and monthly income/i,
  );
  expect(linkElement).toBeInTheDocument();
});
