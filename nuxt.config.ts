import Icons from 'unplugin-icons/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: '/',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Caio Oliveira',
			meta: [
				{ name: 'description', content: 'Caio das Virgens S. Oliveira personal site' },
				{ name: 'application-name', content: 'Caio Oliveira Profile' },
				{ name: 'author', content: 'Caio das Virgens S. Oliveira' },
			],
		},
		rootId: 'nuxt_root',
	},
	routeRules: {
		// FIXME: experimental feature not working.
		// See [Nitro issue](https://github.com/unjs/nitro/issues/604).
		'/resume/**': { static: true },
		'/curriculo/**': { redirect: '/resume' },
		'/app/**': { ssr: false }, // SPA
		'/articles/**': { static: true },
		'/': { static: true },
	},
	components: {
		dirs: [
			{
				path: '@/components',
				extensions: ['.vue'],
				pathPrefix: false,
			},
		],
	},
	imports: {
		dirs: [],
	},
	srcDir: 'src/',
	alias: {
		'@': '/<rootDir>',
		assets: '/<rootDir>/assets',
		public: '/<rootDir>/public',
	},
	typescript: {
		strict: true,
		typeCheck: true,
	},
	test: true,
	vite: {
		// TODO: Use [Nuxt Icon](https://github.com/nuxt-modules/icon) when it have
		// support for loading icons in build time. See issue #34
		plugins: [Icons({ scale: 1 })],
		envPrefix: 'APP_',
	},
});
