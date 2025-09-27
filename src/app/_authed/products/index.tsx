import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { productQueries } from '~/utils/queries/product';

export const Route = createFileRoute('/_authed/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  useQuery(productQueries.all.queryOptions({}));
  useQuery(productQueries.one.queryOptions(1));

  return null;
}
