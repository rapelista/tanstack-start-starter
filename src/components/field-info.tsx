import { AnyFieldApi } from '@tanstack/react-form';

interface FieldInfoProps {
  field: AnyFieldApi;
}
export function FieldInfo({ field }: FieldInfoProps) {
  if (field.state.meta.errors.length > 0) {
    return (
      <p className="text-sm text-destructive">
        {field.state.meta.errors.map((error) => error.message).join(', ')}
      </p>
    );
  }

  return null;
}
