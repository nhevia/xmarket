import React, { MouseEvent } from 'react';
import s from './Modal.module.css';

interface AppProps {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
}

const Modal = ({
  visible,
  setVisible,
  header,
  content,
  footer,
  closable = true,
}: AppProps) => {
  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <div className={s.container} onClick={(e) => closeModal(e)}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {closable && (
          <div className={s.close} onClick={(e) => closeModal(e)}>
            <span className={s['close-button']} aria-label="close popup window">
              X
            </span>
          </div>
        )}
        <div className={s.header}>{header}</div>
        <div className={s.content}>{content}</div>
        <div className={s.footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
