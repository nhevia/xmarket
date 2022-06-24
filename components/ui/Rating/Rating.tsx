import React from 'react';
import s from './Rating.module.css';

interface AppProps {
  rating: number;
  style?: { [key: string]: string | number };
}

const Rating = ({ rating, style }: AppProps) => {
  return (
    <div
      className={s['rating-stars']}
      style={{ '--rating': rating, ...style } as React.CSSProperties}
      aria-label={`Rating of this product is ${rating} out of 5.`}
    ></div>
  );
};

export default Rating;
