import { z } from 'zod';

export function zodValidator<Out, In>(schema: z.ZodType<Out, In>) {
  return schema.decode;
}
