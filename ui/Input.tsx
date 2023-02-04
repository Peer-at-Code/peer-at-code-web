import { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: React.ReactNode;
    error?: React.ReactNode;
    description?: React.ReactNode;
  }
>(({ className, label, description, error, ...props }, ref) => (
  <>
    <Label label={label} description={description} required={props.required} className={className}>
      <input
        ref={ref}
        className="w-full rounded-lg border-0 bg-[#424242] px-5 py-2.5 text-sm font-medium outline-none transition-colors focus:outline-none focus:ring-0 disabled:opacity-50"
        {...props}
      />
    </Label>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
));

Input.displayName = 'Input';

export default Input;