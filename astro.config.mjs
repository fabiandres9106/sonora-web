// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(), 
		sitemap(),
		icon(),
	],
	fonts: [
				
	],
	vite: {
		plugins: [tailwindcss()],
		ssr: { noExternal: ["@midudev/tailwind-animations"] }
	}
});
