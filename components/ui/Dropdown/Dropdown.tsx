import React from 'react';
import s from './Dropdown.module.css';

interface AppProps {
  options: Array<string | number>;
  optionHandler: (category: string) => void;
  label?: string;
  placeholder?: string;
}

const Dropdown = ({
  options,
  label,
  placeholder = 'Select an option',
  optionHandler,
}: AppProps) => {
  return (
    <div className={s['dropdown-container']}>
      {label && <label className={s['dropdown-label']}>{label}</label>}
      <div className={s['dropdown-select-container']}>
        <select
          className={s['dropdown-select']}
          onChange={(e) => optionHandler(e.target.value.toLowerCase())}
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
};

export default Dropdown;
