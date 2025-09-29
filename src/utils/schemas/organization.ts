import { z } from 'zod';

export const CreateOrganizationSchema = z.object({
  name: z.string().min(3).max(50),
});

export type CreateOrganizationPayload = z.infer<
  typeof CreateOrganizationSchema
>;
