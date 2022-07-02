import React, { FormEvent } from 'react';
import s from './Login.module.css';
import Modal from '@components/ui/Modal';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Login = ({ setVisible }: AppProps) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setVisible(false);
  };

  const LoginContent = (
    <form className={s.login} onSubmit={(e) => onSubmit(e)}>
      <div className={s.row}>
        <label>Email</label>
        <input type="email" defaultValue="use@this.email" />
      </div>

      <div className={s.row}>
        <label>Password</label>
        <input type="password" defaultValue="asdasd" />
      </div>
      <div className={s.buttons}>
        <button type="submit">Login</button>
        <button className="no-shadow">... or Register</button>
      </div>
    </form>
  );

  return (
    <>
      <Modal setVisible={setVisible} content={LoginContent} />
    </>
  );
};

export default Login;
