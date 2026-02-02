import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dehaoterryzhang.github.io',
  integrations: [tailwind()],
  output: 'static',
});
