import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://johnborillo.github.io/john-in-wonderland',
	// base: '/john-in-wonderland/',
	integrations: [mdx(), sitemap()],
	
	// Define routes for your pages
	// routes: [
	// 	{ src: '/home', dest: '/src/routes/home.astro' },
	//   ],
});
