import React, { useState, FormEvent } from 'react';
import { useAuthStore } from 'store/auth';
import Modal from 'components/ui/Modal';
import s from './Login.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Login = ({ setVisible }: AppProps) => {
  const [email, setEmail] = useState('use@this.email');
  const [password, setPassword] = useState('aaaddd');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { setIsLoggedIn } = useAuthStore((state) => state);

  const validateForm = () => {
    if (email === 'use@this.email' && password === 'aaaddd') {
      return true;
    } else {
      setIsError(true);
      return false;
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setVisible(false);
    }, 500);
  };

  const LoginContent = (
    <form className={s.login} onSubmit={(e) => onSubmit(e)}>
      <div className={s.row}>
        <label>Email</label>
        <input
          className={s.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={s.row}>
        <label>Password</label>
        <input
          className={s.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={s.buttons}>
        <button className={s.login} type="submit" disabled={isLoading}>
          Login
        </button>
        <button className={`${s.register} no-shadow`}>... or Register</button>
      </div>
      {isError && <p style={{ color: 'red' }}>use@this.email / aaaddd</p>}
    </form>
  );

  return (
    <>
      <Modal setVisible={setVisible} content={LoginContent} />
    </>
  );
};

export default Login;
