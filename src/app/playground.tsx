import { createFileRoute } from '@tanstack/react-router';

import { Google } from '~/components/ui/svgs/google';

export const Route = createFileRoute('/playground')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="my-12 mx-auto w-fit">
        <Google className="w-4 h-4" />
      </div>
    </div>
  );
}
