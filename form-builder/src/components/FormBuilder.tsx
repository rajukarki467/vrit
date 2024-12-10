import React, { useState, useMemo } from 'react';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { TextInput } from './TextInput';
import { SelectInput } from './SelectInput';
import { RadioButtons } from './RadioButtons';
import { Checkbox } from './Checkbox';
import { generateSchema } from '../utils/generateSchema';

type FormComponentType = 'text' | 'select' | 'radio' | 'checkbox';

interface FormBuilderProps {
  setFormComponents: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ setFormComponents }) => {
  const [draggingItem, setDraggingItem] = useState<FormComponentType | null>(null);

  const handleDrop = (componentType: FormComponentType) => {
    if (componentType) {
      setFormComponents((prev) => [...prev, componentType]);
    }
  };

  return (
    <div>
      <div
        draggable
        onDragStart={() => setDraggingItem('text')}
        onDragEnd={() => handleDrop('text')}
      >
        Add Text Input
      </div>
      <div
        draggable
        onDragStart={() => setDraggingItem('select')}
        onDragEnd={() => handleDrop('select')}
      >
        Add Select Dropdown
      </div>
      <div
        draggable
        onDragStart={() => setDraggingItem('radio')}
        onDragEnd={() => handleDrop('radio')}
      >
        Add Radio Buttons
      </div>
      <div
        draggable
        onDragStart={() => setDraggingItem('checkbox')}
        onDragEnd={() => handleDrop('checkbox')}
      >
        Add Checkbox
      </div>
    </div>
  );
};
