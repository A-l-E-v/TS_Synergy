import { useEffect, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Login from '../components/Login';
import Email from '../components/Email';
import Password from '../components/Password';

interface RegistrationForm {
  login: string;
  email: string;
  password: string;
}

const Registration = () => {
  const [form, setForm] = useState<RegistrationForm>({ login: '', email: '', password: '' });
  const [validator] = useState<SimpleReactValidator>(new SimpleReactValidator());
  const [validatorMessage, setValidatorMessage] = useState<string>(''); // Состояние для сообщения об ошибке

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    // Устанавливаем сообщение об ошибке валидатора
    validator.showMessageFor(e.target.name);
    setValidatorMessage(validator.message(
      e.target.name,
      form[e.target.name as keyof RegistrationForm],
      'required')); // Получения сообщения
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      console.error('Ошибка при отправке данных:', response.statusText);
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    if (validator.allValid()) {
      validator.hideMessages();
    }
  }, [form, validator]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="container-form">
        <h1>Регистрация</h1>
        <Login
          value={form.login}
          onChange={handleChange}
          onBlur={handleBlur}
          validator={validator}
          validatorMessage={validatorMessage} // Сообщение об ошибке
        />
        <Email
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          validator={validator}
          validatorMessage={validatorMessage}
        />
        <Password
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          validator={validator}
          // Используем validatorMessage
          validatorMessage={
            validator.message('password',
              form.password, 'required|min:8')}
        />
        <button
          type="submit"
          className="submit-button"
          disabled={!validator.allValid()}>Зарегистрироваться!</button>
      </form>
    </div>
  );
};

export default Registration;
