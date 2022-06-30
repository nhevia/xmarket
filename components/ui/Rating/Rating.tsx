import React from 'react';
import s from './Rating.module.css';

interface AppProps {
  rating: { rate: number; count: number };
  style?: { [key: string]: string | number };
}

const Rating = ({ rating, style }: AppProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...style }}>
      <div
        className={s['rating-stars']}
        style={{ '--rating': rating.rate } as React.CSSProperties}
        aria-label={`Rating of this product is ${rating.rate} out of 5.`}
      ></div>
      {rating.count && <span className="text-sm">({rating.count})</span>}
    </div>
  );
};

export default Rating;
