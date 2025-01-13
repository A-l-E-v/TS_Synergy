import SimpleReactValidator from 'simple-react-validator';

interface PasswordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  validator: SimpleReactValidator; // Пропс для валидатора
  validatorMessage: string;
}

const Password: React.FC<PasswordProps> = ({ value, onChange, onBlur, validator, validatorMessage }) => (
  <div>
    <label htmlFor="password">Пароль</label>
    <input
      id="password"
      type="password"
      name="password"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder="Введите пароль"
    />
    <div className="srv-validation-message">{validatorMessage}</div>
  </div>
);

export default Password;
