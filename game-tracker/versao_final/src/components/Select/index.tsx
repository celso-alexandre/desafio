import React from 'react';
import IOption from '../../interfaces/IOption';

interface IProps {
   options: IOption[];
   setOptions(options: IOption[]): any;
}

const Select: React.FC<IProps> = ({ options, setOptions }: IProps) => {
  const handleOptionSelected = (newValue: string) => {
    const newOptions = options.map((option) => {
      const { value, text } = option;
      return {
        selected: (value === newValue),
        text,
        value,
      };
    });

    setOptions(newOptions);
  };

  return (
    <select onChange={(e) => handleOptionSelected(e.target.value)}>
      {options.map((option_) => (
        <option
          selected={option_.selected}
          value={option_.value}
        >
          {option_.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
