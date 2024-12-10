import React, { useState } from 'react';

interface SelectInputProps {
  onChange: (value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Select Input</label>
      <select value={value} onChange={handleChange}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};
