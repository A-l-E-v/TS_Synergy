import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

interface RegistrationForm {
  login: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const [form, setForm] = useState<RegistrationForm>({ login: '', email: '', password: '' });
  const [validator] = useState(new SimpleReactValidator());
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validator.showMessageFor(e.target.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validator.allValid()) {
      console.log(form);
    } else {
      validator.showMessages();
    }
  };

  useEffect(() => {
    if (validator.allValid()) {
      validator.hideMessages();
    }
  }, [form, validator]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          name="login"
          value={form.login}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validator.message('login', form.login, 'required')}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validator.message('email', form.email, 'required|email')}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validator.message('password', form.password, 'required|min:8')}
      </Form.Group>

      <Button type="submit" disabled={!validator.allValid()}>
        Sign Up
      </Button>
    </Form>
  );
};

export default Registration;
