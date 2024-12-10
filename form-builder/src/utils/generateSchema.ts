export const generateSchema = (components: string[]) => {
  return components.map((component) => {
    switch (component) {
      case 'text':
        return { type: 'text', label: 'Text Input', required: true };
      case 'select':
        return {
          type: 'select',
          label: 'Select Dropdown',
          options: ['option1', 'option2'],
        };
      case 'radio':
        return {
          type: 'radio',
          label: 'Radio Buttons',
          options: ['Yes', 'No'],
        };
      case 'checkbox':
        return {
          type: 'checkbox',
          label: 'Checkbox',
        };
      default:
        return null;
    }
  });
};
