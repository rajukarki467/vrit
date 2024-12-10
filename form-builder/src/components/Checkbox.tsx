import React, { useState } from 'react';

interface CheckboxProps {
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div>
      <label>Checkbox</label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
};
