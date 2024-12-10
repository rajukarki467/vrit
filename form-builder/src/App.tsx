import React, { useState } from 'react';
import { FormBuilder } from './components/FormBuilder';
import { PreviewForm } from './components/PreviewForm';
import './styles/app.css';

const App: React.FC = () => {
  const [formComponents, setFormComponents] = useState<string[]>([]);
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const togglePreview = () => setIsPreview(!isPreview);

  return (
    <div className="App">
      <h1>Interactive Form Builder</h1>
      <button onClick={togglePreview}>{isPreview ? 'Edit Form' : 'Preview Form'}</button>

      {isPreview ? (
        <PreviewForm components={formComponents} />
      ) : (
        <FormBuilder setFormComponents={setFormComponents} />
      )}
    </div>
  );
};

export default App;
