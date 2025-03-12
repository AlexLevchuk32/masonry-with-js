import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	base: '/masonry-with-js/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
