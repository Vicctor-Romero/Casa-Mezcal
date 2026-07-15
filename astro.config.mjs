// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Necesario para canonical y og:url/og:image absolutos.
  site: 'https://casamezcalalpine.com',
  vite: {
    plugins: [tailwindcss()]
  }
});