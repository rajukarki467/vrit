import React, { useState } from 'react';
import { z } from 'zod';

const TextInputSchema = z.string().min(1, 'This field is required.');

interface TextInputProps {
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };

  return (
    <div>
      <label>Text Input</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
