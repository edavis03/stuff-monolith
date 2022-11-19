import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';

it('should display stuff', async () => {
  render(<App />);
  expect(screen.getByText(/stuff/i)).toBeInTheDocument();

  expect(await screen.findByText(/boots/i)).toBeInTheDocument();
  expect(await screen.findByText(/belt/i)).toBeInTheDocument();
  expect(await screen.findByText(/cowboy hat/i)).toBeInTheDocument();
});

export {}
