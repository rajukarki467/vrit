import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from '../components/TextInput';

test('renders TextInput and changes value', () => {
  const handleChange = jest.fn();
  render(<TextInput onChange={handleChange} />);
  const inputElement = screen.getByLabelText(/Text Input/i);
  fireEvent.change(inputElement, { target: { value: 'Test' } });
  expect(handleChange).toHaveBeenCalledWith('Test');
});
