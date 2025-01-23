import { render, screen, fireEvent } from '@testing-library/react';
import { FormBuilder } from './FormBuilder';
import { generateFormSchema } from '../utils/generateFormSchema';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('../utils/generateFormSchema', () => ({
  generateFormSchema: vi.fn(),
}));

describe('FormBuilder', () => {
  it('should render available components', () => {
    render(<FormBuilder setFormFields={() => {}} />);
    expect(screen.getByText('Text Field')).toBeInTheDocument();
  });

  it('should generate form schema when button is clicked', () => {
    render(<FormBuilder setFormFields={() => {}} />);
    
    const button = screen.getByRole('button', { name: /generate form json schema/i });
    fireEvent.click(button);
    expect(generateFormSchema).toHaveBeenCalled();
  });
});
