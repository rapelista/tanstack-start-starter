import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
        libero repellat minima itaque dolores nostrum laudantium totam et neque
        praesentium harum perspiciatis voluptatem repellendus, alias sapiente
        asperiores voluptate quidem.
      </p>
    </div>
  );
}
