import React, { forwardRef, ForwardedRef } from 'react';
import s from './Dropdown.module.css';

interface AppProps {
  options: Array<string | number>;
  optionHandler: (category: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const Dropdown = forwardRef<HTMLSelectElement, AppProps>(
  (
    {
      options,
      label,
      placeholder = 'Select an option',
      optionHandler,
      required = false,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;

      optionHandler(value.toLowerCase());
    };

    return (
      <div className={s.root}>
        {label && (
          <label className={`${s.label} ${required ? s.required : ''}`}>
            {label}
          </label>
        )}
        <div className={s['select-container']}>
          <select
            ref={ref as ForwardedRef<HTMLSelectElement>}
            className={s.select}
            onChange={handleChange}
          >
            <option selected value="">
              {placeholder}
            </option>
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
