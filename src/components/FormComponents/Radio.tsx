import React from 'react';

interface RadioProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<RadioProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name={label}
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </div>
      ))}
    </div>
  );
};