/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({}),
		// ssr: false, // Comment this line for SEO output | at the cost of window object
		paths: {
			assets: '',
			base: ''
		},
	},
};


// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		target: '#svelte'
// 	}
// };

// export default config;
