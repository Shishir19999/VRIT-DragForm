import React, { useState } from 'react';
import { DragItem } from './DragAndDrop';
import { TextField } from './FormComponents/TextField';
import { Select } from './FormComponents/Select';
import { Radio } from './FormComponents/Radio';
import { FormField } from '../types';
import { generateFormSchema } from '../utils/generateFormSchema';

const formComponents = [
  { id: 'text', label: 'Text Field', component: 'TextField' },
  { id: 'select', label: 'Select Field', component: 'Select' },
  { id: 'radio', label: 'Radio Button', component: 'Radio' },
];

const componentMap: Record<string, React.FC<any>> = {
  TextField,
  Select,
  Radio,
};

interface FormBuilderProps {
  setFormFields: React.Dispatch<React.SetStateAction<FormField[]>>;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ setFormFields }) => {
  const [formFieldsLocal, setFormFieldsLocal] = useState<FormField[]>([]);

  const handleDrop = (item: FormField) => {
    const newField = {
      ...item,
      id: `field-${formFieldsLocal.length}`,
      value: '', 
      options: item.options || ['Option 1', 'Option 2', 'Option 3'], // Default options
    };
    setFormFieldsLocal((prev) => [...prev, newField]);
    setFormFields((prev: FormField[]) => [...prev, newField]);
  };

  const handleFieldChange = (id: string, value: string) => {
    setFormFieldsLocal((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field))
    );
    setFormFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleGenerateSchema = () => {
    generateFormSchema(formFieldsLocal);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h3>Available Components</h3>
        {formComponents.map((component) => (
          <DragItem key={component.id} label={component.label} component={component.component} />
        ))}
      </div>

      <div style={{ marginLeft: '30px', flex: 1 }}>
        <h3>Your Form</h3>
        <div
          onDrop={(e: React.DragEvent) => {
            e.preventDefault();
            const componentData = JSON.parse(e.dataTransfer.getData('component'));
            handleDrop(componentData);
          }}
          onDragOver={(e) => e.preventDefault()}
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '100%',
            minHeight: '300px',
          }}
        >
          {formFieldsLocal.map((field) => {
            const Component = componentMap[field.component];
            return (
              <Component
                key={field.id}
                label={field.label}
                value={field.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
                  handleFieldChange(field.id, e.target.value)
                }
                options={field.options}
              />
            );
          })}
        </div>
        <button onClick={handleGenerateSchema}>Generate Form JSON Schema</button>
      </div>
    </div>
  );
};
