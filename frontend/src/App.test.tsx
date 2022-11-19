import React from 'react';
import { render} from '@testing-library/react';
import App from './App';

it('fails', () => {
  render(<App />);
  expect(true).toBe(false);
});
