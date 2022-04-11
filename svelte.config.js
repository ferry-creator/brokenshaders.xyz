import adapter from '@sveltejs/adapter-vercel'
import preprocessor from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					$util: path.resolve('./src/util'),
					$transitions: path.resolve('./src/transitions')
				}
			}
		}
	}
}

export default config
