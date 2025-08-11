import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hangman Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hangman Game/i);
  expect(titleElement).toBeInTheDocument();
});