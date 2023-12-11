import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Valkyricoms docs',
			social: {
				github: 'https://toastielab.dev/Valkyriecoms/valkyrie-docs',
				discord: 'https://discord.gg/y9KtEx7KFx',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'API',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],
});
