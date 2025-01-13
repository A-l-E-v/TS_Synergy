import { useEffect, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Login from '../components/Login';
import Password from '../components/Password';

// Интерфейс формы
interface LoginForm {
  login: string;
  password: string;
}

const LoginPage = () => {
  const [form, setForm] = useState<LoginForm>({ login: '', password: '' });
  const [validator] = useState<SimpleReactValidator>(new SimpleReactValidator());
  // Новое состояние для сообщения об ошибке
  const [validatorMessage, setValidatorMessage] = useState<string>('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    validator.showMessageFor(e.target.name);
    setValidatorMessage(validator.message(e.target.name, e.target.value, 'required'));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
  };

  useEffect(() => {
    if (validator.allValid()) {
      validator.hideMessages();
    }
  }, [form, validator]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="container-form">
        <h1>Вход</h1>
        <Login
          value={form.login}
          onChange={handleChange}
          onBlur={handleBlur}
          validator={validator} // Передача валидатора
          validatorMessage={validatorMessage} // Сообщение об ошибке
        />
        <Password
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          validator={validator} // Передача валидатора
          // Используем validatorMessage
          validatorMessage={
            validator.message('password',
              form.password, 'required|min:8')}
        />
        <button
          type="submit"
          className="submit-button"
          disabled={!validator.allValid()}>Войти!</button>
      </form>
    </div>
  );
};

export default LoginPage;
