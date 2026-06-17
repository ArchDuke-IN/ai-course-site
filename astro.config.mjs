// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ucla-anderson-ssai.github.io',
	base: '/ai-course-site',
	integrations: [
		starlight({
			title: 'AI for Management & Research',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ucla-anderson-ssai/SSAI' }],
			sidebar: [
				{
					label: 'Foundation',
					autogenerate: { directory: 'foundation' },
				},
				{
					label: 'Research',
					autogenerate: { directory: 'research' },
				},
				{
					label: 'Management',
					autogenerate: { directory: 'management' },
				},
			],
		}),
	],
});
