// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ArchDuke-IN.github.io',
	base: '/ai-course-site',
	integrations: [
		starlight({
			title: 'AI for Management & Research',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ucla-anderson-ssai/SSAI' }],
			sidebar: [
				{
					label: 'Foundation',
					items: [{ autogenerate: { directory: 'foundation' } }],
				},
				{
					label: 'Research',
					items: [{ autogenerate: { directory: 'research' } }],
				},
				{
					label: 'Management',
					items: [{ autogenerate: { directory: 'management' } }],
				},
			],
		}),
	],
});
