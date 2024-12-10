import { render, screen, fireEvent } from '@testing-library/react';
import { FormBuilder } from '../components/FormBuilder';

test('renders form builder with drag options', () => {
  render(<FormBuilder setFormComponents={jest.fn()} />);
  const addTextButton = screen.getByText(/Add Text Input/i);
  expect(addTextButton).toBeInTheDocument();
});
