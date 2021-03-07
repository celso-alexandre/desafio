import React from 'react';
import IOption from '../../interfaces/IOption';

interface IProps {
   options: IOption[];
   selected: string;
   setSelected(option: string): any;
}

const Select: React.FC<IProps> = ({ options, selected, setSelected }: IProps) => {
  console.log(selected);

  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {options.map((option_) => (
        <option
          key={option_.value}
          value={option_.value}
        >
          {option_.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
