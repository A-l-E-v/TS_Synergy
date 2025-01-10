import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/react';
import Registration from '../pages/Registration';

test('renders registration form', () => {
  render(<Registration />);
  expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('validates login field', () => {
  render(<Registration />);
  const loginInput = screen.getByLabelText(/login/i);
  
  fireEvent.blur(loginInput);
  expect(screen.getByText('The login field is required.')).toBeInTheDocument();

  fireEvent.change(loginInput, { target: { value: 'testuser' } });
  expect(screen.queryByText('The login field is required.')).not.toBeInTheDocument();
});
