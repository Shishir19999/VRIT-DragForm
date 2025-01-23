import { z } from 'zod';

export const formSchema = z.object({
  textField: z.string().min(1, 'Text field is required'),
  selectField: z.enum(['Option 1', 'Option 2']).optional(),
});

export const validateForm = (formData: any) => {
  try {
    formSchema.parse(formData);
    return true;
  } 
  catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors;
    }
    console.error("Unexpected error:", error); 
    return [];
  }
};
