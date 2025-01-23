import React, { useState } from 'react';
import { FormField } from '../types';
import { FormBuilder } from './FormBuilder';
import { TextField } from './FormComponents/TextField';
import { Select } from './FormComponents/Select';
import { Radio } from './FormComponents/Radio';

const componentMap: Record<string, React.FC<any>> = {
  TextField,
  Select,
  Radio,
};

interface FormPreviewProps {
  setFormFields: React.Dispatch<React.SetStateAction<FormField[]>>;
  formFields: FormField[];
}

export const FormPreview: React.FC<FormPreviewProps> = ({ setFormFields, formFields }) => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handlePreviewToggle = () => {
    setIsPreview(!isPreview);
  };

  const handleFieldChange = (id: string, value: string) => {
    setFormFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  return (
    <div>
      <button onClick={handlePreviewToggle}>
        {isPreview ? 'Back to Builder' : 'Preview Form'}
      </button>

      {isPreview ? (
        <div>
          <h3>Preview Mode</h3>
          <div
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '300px',
            }}
          >
            {formFields.map((field) => {
              const Component = componentMap[field.component];
              return (
                <div key={field.id} style={{ marginBottom: '10px' }}>
                  <label>{field.label}</label>
                  <Component
                    value={field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
                      handleFieldChange(field.id, e.target.value)
                    }
                    options={field.options}
                    disabled={isPreview} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <FormBuilder setFormFields={setFormFields} />
      )}
    </div>
  );
};
