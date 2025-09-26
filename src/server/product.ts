import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const PaginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
  orderBy: z.string().optional(),
});

export const getProducts = createServerFn({ method: 'GET' })
  .inputValidator(PaginationSchema)
  .handler(() => {
    return {
      data: [],
    };
  });

export const getProductById = createServerFn({ method: 'GET' })
  .inputValidator(z.number())
  .handler(({ data }) => {
    console.log({ data });

    return {
      data: [],
    };
  });
