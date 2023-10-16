import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://johnborillo.github.io',
	base: '/john-in-wonderland/',
	integrations: [mdx(), sitemap()],
});
