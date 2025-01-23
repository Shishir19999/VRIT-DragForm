import React from 'react';

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
