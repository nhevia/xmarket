import React from 'react';
import s from './Tooltip.module.css';

interface AppProps {
  text: string;
  tooltipText?: string;
}

const Tooltip = ({
  text,
  tooltipText = 'Seller specialized in selling stuff.',
}: AppProps) => {
  return (
    <span className={s.tooltip}>
      {text}
      <p className={`${s['tooltip-text']} ${s.topright}`}>{tooltipText}</p>
    </span>
  );
};

export default Tooltip;
