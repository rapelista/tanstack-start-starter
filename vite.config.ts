import tailwindcss from '@tailwindcss/vite';
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  envPrefix: ['AUTH_', 'DATABASE_'],

  server: {
    port: 3000,
  },

  plugins: [
    tsConfigPaths(),

    tanstackStart({
      router: {
        routesDirectory: 'app',
      },
    }),

    nitroV2Plugin(),

    viteReact(),

    tailwindcss(),
  ],
});
