import { getProducts } from '~/server/product';

import { createQueryOptionalFn } from '.';

export const productQueries = {
  all: createQueryOptionalFn(getProducts, ['products']),
};
