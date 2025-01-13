import { render, screen, fireEvent } from '@testing-library/react';
import Registration from './pages/Registration';

test('validates login input blur event', () => {
  render(<Registration />);

  // Ищем элемент input для логина по идентификатору и вызываем событие blur
  const loginInput = screen.getByLabelText(/login/i);
  fireEvent.blur(loginInput);

  // Проверяем, что сообщение об ошибке присутствует
  expect(screen.getByText(/The login field is required/i)).toBeInTheDocument();

  // Вводим валидные данные и проверяем, что сообщения об ошибках больше нет
  fireEvent.change(loginInput, { target: { value: 'validLogin' } });
  expect(screen.queryByText(/The login field is required/i)).not.toBeInTheDocument();
});
