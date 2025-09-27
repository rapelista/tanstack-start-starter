import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

import { zodValidator } from '~/lib/zod-validator';

const PaginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
  orderBy: z.string().optional(),
});

export const getProducts = createServerFn({ method: 'GET' })
  .inputValidator(zodValidator(PaginationSchema))
  .handler(() => {
    return {
      data: [],
    };
  });

export const getProductById = createServerFn({ method: 'GET' })
  .inputValidator(zodValidator(z.number().int().positive()))
  .handler(() => {
    return {
      data: [],
    };
  });
