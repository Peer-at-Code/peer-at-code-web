import { forwardRef } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: React.ReactNode;
    description?: string;
    options: { value: string; title: string }[];
  } & Partial<ReturnType<UseFormRegister<any>>>
>(({ options, className, label, description, error, ...props }, ref) => (
  <>
    <Label label={label} description={description} required={props.required} className={className}>
      <select
        className={
          'w-full cursor-pointer overflow-hidden rounded-lg border-2 border-highlight-primary bg-transparent px-5 py-2.5 text-sm font-medium text-secondary opacity-80 outline-none transition-opacity hover:opacity-100 disabled:opacity-50'
        }
        {...props}
        ref={ref}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </Label>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
));

Select.displayName = 'Select';

export default Select;
