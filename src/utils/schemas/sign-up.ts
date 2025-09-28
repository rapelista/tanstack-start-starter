import { z } from 'zod';

export const SignUpSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export type SignUpPayload = z.infer<typeof SignUpSchema>;
