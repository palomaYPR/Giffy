import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders lwithout crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
