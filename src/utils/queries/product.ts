import { queryOptions } from '@tanstack/react-query';

import { getProductById, getProducts } from '~/server/product';

import { queryOptionsServerFn } from '.';

export const productQueries = {
  all: queryOptionsServerFn(getProducts, ['products']),

  one: (id: number) =>
    queryOptions({
      queryKey: ['product', id],
      queryFn: () => getProductById({ data: id }),
    }),
};
