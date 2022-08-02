import React, {
  useState,
  useRef,
  forwardRef,
  MouseEvent,
  ForwardedRef,
} from 'react';
import { categoriesConfiguration } from '__mocks__/categories';
import s from './ColorPicker.module.css';

interface AppProps {
  category: string;
  onClickHandler: (val: string) => void;
  required?: boolean;
}

const ColorPicker = forwardRef<HTMLDivElement, AppProps>(
  ({ category, onClickHandler, required = false }, ref) => {
    const [hoveredColor, setHoveredColor] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

    const handleClick = (e: MouseEvent<HTMLDivElement>, color: string) => {
      // TODO another option is migrating the color boxes to their own component and
      // using context or passing down setstate
      itemsRef.current.forEach((el) => el?.setAttribute('style', 'opacity: 0'));
      itemsRef.current
        .find((el) => el === e.target)
        ?.setAttribute('style', `opacity: 1`);

      onClickHandler(color);
      setSelectedColor(color);
    };

    return (
      <div>
        <p className={`${s.label} ${required ? s.required : ''}`}>
          Color: {hoveredColor}
        </p>
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
                ref={ref as ForwardedRef<HTMLDivElement>}
                key={color}
                className={s.color}
                style={{ backgroundColor: color as string }}
                onClick={(e) => handleClick(e, color as string)}
                onMouseOver={() => setHoveredColor(color as string)}
                onMouseLeave={() => {
                  setHoveredColor(selectedColor);
                }}
                aria-label={color as string}
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
  }
);

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
