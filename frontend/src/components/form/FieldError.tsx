import { type FieldError } from 'react-hook-form';

export default function FieldError({ error }: { error?: FieldError }) {
  return <span className="text-red-500 text-sm mt-1">{error?.message}</span>;
}
