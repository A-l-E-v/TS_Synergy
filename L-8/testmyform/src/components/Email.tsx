import SimpleReactValidator from 'simple-react-validator';

interface EmailProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  validator: SimpleReactValidator;
  validatorMessage: string; // Пропс для сообщения об ошибке
}

const Email: React.FC<EmailProps> = ({ value, onChange, onBlur, validator, validatorMessage }) => (
  <div>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder="Введите email"
    />
    <div className="srv-validation-message">{validator.message('email', value, 'required|email')}</div>
  </div>
);

export default Email;
