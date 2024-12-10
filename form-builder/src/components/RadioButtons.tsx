import React, { useState } from 'react';

interface RadioButtonsProps {
  onChange: (value: string) => void;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Radio Buttons</label>
      <div>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleChange}
        />
        Option 1
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleChange}
        />
        Option 2
      </div>
    </div>
  );
};
