import { queryOptionsServerFn } from '~/lib/query-options-server-fn';
import { getProductById, getProducts } from '~/server/product';

export const productQueries = {
  all: queryOptionsServerFn(getProducts, ['products']),
  one: queryOptionsServerFn(getProductById, ['product', 'byId']),
};
