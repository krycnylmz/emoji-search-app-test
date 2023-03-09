import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header text should be on the document', () => {
  render(<Header />);
  const headerText = screen.getByText("Emoji Search");
  expect(headerText).toBeInTheDocument();
});
