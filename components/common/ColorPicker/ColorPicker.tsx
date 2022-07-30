import React, { useState, useRef, MouseEvent } from 'react';
import { categoriesConfiguration } from '__mocks__/categories';
import s from './ColorPicker.module.css';

interface AppProps {
  category: string;
  onClickHandler: (val: string) => void;
}

const ColorPicker = ({ category, onClickHandler }: AppProps) => {
  const [hoveredColor, setHoveredColor] = useState('');

  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // TODO another option is migrating the color boxes to their own component and
    // using context or passing down setstate
    itemsRef.current.forEach((el) => el?.setAttribute('style', 'opacity: 0'));
    itemsRef.current
      .find((el) => el === e.target)
      ?.setAttribute('style', `opacity: 1`);

    onClickHandler((e.target as HTMLElement).id);
  };

  return (
    <div>
      <p className={s.label}>Color: {hoveredColor}</p>
      <div className={s.colors}>
        <>
          {(
            categoriesConfiguration as {
              [key: string]: {
                [key: string]: string[] | number[];
              };
            }
          )[category].color.map((color, i) => (
            <div
              key={color}
              className={s.color}
              style={{ backgroundColor: color as string }}
              onClick={(e) => handleClick(e)}
              onMouseOver={() => setHoveredColor(color as string)}
            >
              <div
                id={color as string}
                ref={(el) => (itemsRef.current[i] = el)}
                className={s.mask}
              ></div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default ColorPicker;
