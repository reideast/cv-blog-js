import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders basic API test', () => {
  const { getByText } = render(<App />);
  const headerElem = getByText(/Welcome to React/i);
  expect(headerElem).toBeInTheDocument();
});
