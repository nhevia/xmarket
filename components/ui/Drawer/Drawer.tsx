import React, { useEffect } from 'react';
import s from './Drawer.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
  children?: React.ReactNode;
  position?: 'top' | 'right';
  isBlurred?: boolean;
  disableScrollbar?: boolean;
}

const Sider = ({
  setVisible,
  position = 'right',
  isBlurred = true,
  children,
  disableScrollbar = true,
}: AppProps) => {
  useEffect(() => {
    if (disableScrollbar) {
      disableScrollbar &&
        document.body.setAttribute('class', 'scrollbar-disabled');

      return () => disableScrollbar && document.body.removeAttribute('class');
    }
  }, [disableScrollbar]);

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
