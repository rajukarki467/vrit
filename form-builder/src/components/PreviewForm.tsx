import React from 'react';

interface PreviewFormProps {
  components: string[];
}

export const PreviewForm: React.FC<PreviewFormProps> = ({ components }) => {
  return (
    <div>
      <h2>Form Preview</h2>
      {components.map((component, idx) => {
        switch (component) {
          case 'text':
            return <div key={idx}>Text Input</div>;
          case 'select':
            return <div key={idx}>Select Dropdown</div>;
          case 'radio':
            return <div key={idx}>Radio Buttons</div>;
          case 'checkbox':
            return <div key={idx}>Checkbox</div>;
          default:
            return null;
        }
      })}
    </div>
  );
};
