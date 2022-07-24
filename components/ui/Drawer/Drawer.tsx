import React from 'react';
import s from './Drawer.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
  children?: React.ReactNode;
  position?: 'top' | 'right';
  isBlurred?: boolean;
}

const Sider = ({
  setVisible,
  position = 'right',
  isBlurred = true,
  children,
}: AppProps) => {
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={`${s.root} ${isBlurred && s['is-blurred']}`}
      onClick={() => onClose()}
    >
      <div
        className={(s as { [className: string]: string })[position]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Sider;
