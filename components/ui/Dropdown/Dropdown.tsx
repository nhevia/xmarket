import React from 'react';
import s from './Dropdown.module.css';

interface AppProps {
  options: Array<string | number>;
  label?: string;
}

const Dropdown = ({ options, label }: AppProps) => {
  return (
    <div className={s['dropdown-container']}>
      {label && <p className={s['dropdown-label']}>{label}</p>}
      <div className={s['dropdown-select-container']}>
        <select className={s['dropdown-select']}>
          <option value="selected">Select an option</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;