import { render, screen } from '@testing-library/react';
import App from './App';

test('renders searchbar', () => {
  render(<App />);
  const search = screen.getByLabelText('What will you be having?');
  expect(search).toBeInTheDocument();
});
