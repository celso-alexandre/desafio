import React from 'react';
import IOption from '../../interfaces/IOption';
import { HTMLSelect } from './styles';

interface IProps {
   options: IOption[];
   selected: string;
   setSelected(option: string): any;
}

const Select: React.FC<IProps> = ({ options, selected, setSelected }: IProps) => {
  return (
    <HTMLSelect value={selected} onChange={(e) => setSelected(e.target.value)}>
      {options.map((option_) => (
        <option
          key={option_.value}
          value={option_.value}
        >
          {option_.text}
        </option>
      ))}
    </HTMLSelect>
  );
};

export default Select;
