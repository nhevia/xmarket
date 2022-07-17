import React from 'react';
import s from './Split.module.css';

interface AppProps {
  children: [React.ReactNode, React.ReactNode];
}

const Split = ({ children }: AppProps) => {
  return (
    <div className={s.root}>
      <div className={s.left}>{children[0]}</div>
      <div className={s.right}>{children[1]}</div>
    </div>
  );
};

export default Split;
