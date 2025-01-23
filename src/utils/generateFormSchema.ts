export type FormField = {
    id: string;
    label: string;
    component: string;
  };
  
  export const generateFormSchema = (formFields: FormField[]) => {
      console.log('Form Schema Generated:', formFields);
    return formFields.map((field) => ({
      id: field.id,
      label: field.label,
      component: field.component,
    }));

  };
  