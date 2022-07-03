import React from 'react';
import s from './Sider.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
}

const Sider = ({ setVisible, children }: AppProps) => {
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={s.root} onClick={() => onClose()}>
      <div className={s.sider} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Sider;
