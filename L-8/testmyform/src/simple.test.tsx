import { render } from '@testing-library/react';
import Registration from './pages/Registration';

// Простой snapshot-тест страницы регистрации
describe('Registration Page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Registration />);
    expect(asFragment()).toMatchSnapshot();
  });
});
