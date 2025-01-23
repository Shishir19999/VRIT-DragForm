import React, { useState } from 'react';
import { FormPreview } from './components/FormPreview';
import { FormField } from './types'; 

const App: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>([]); 

  return (
    <div>
      <h1>Form Builder and Preview</h1>
      <FormPreview setFormFields={setFormFields} formFields={formFields} />
    </div>
  );
};

export default App;
