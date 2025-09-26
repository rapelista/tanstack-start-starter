import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { productQueries } from '~/utils/queries/product';

export const Route = createFileRoute('/_authed/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery(productQueries.all({ page: 1, limit: 10 }));

  return data;
}
