import { render, screen } from '@testing-library/react';
import Template from "./App";

test('renders learn react link', () => {
  render(<Template />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
