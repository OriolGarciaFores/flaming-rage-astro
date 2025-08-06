import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
  build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          assetFileNames: 'styles/[name][extname]',
        },
      },
    }
  }
});