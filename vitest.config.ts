import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// specify custom enviroments adding `@vitest-environment happy-dom` comments
		// at the top of the file. See [Vitest docs](https://vitest.dev/config/#environment)
		environment: 'node',
		typecheck: {
			checker: 'vue-tsc',
			allowJs: false,
			ignoreSourceErrors: false,
		},
	},
});
