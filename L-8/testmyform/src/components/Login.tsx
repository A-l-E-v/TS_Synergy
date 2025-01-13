import SimpleReactValidator from 'simple-react-validator';

interface LoginProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validator: SimpleReactValidator; // Пропс для валидатора
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  validatorMessage: string; // Пропс для сообщения об ошибке
}

const Login: React.FC<LoginProps> = ({ value, onChange, validator, onBlur, validatorMessage }) => (
  <div>
    <label htmlFor="login">Login</label>
    <input
      id="login"
      type="text"
      name="login"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder="Введите логин"
    />
    <div className="srv-validation-message">{validator.message('login', value, 'required|login')}</div>

  </div>
);

export default Login;
