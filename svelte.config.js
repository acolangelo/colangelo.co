import adapter from '@sveltejs/adapter-static';

const [owner, repoFromGithub] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const repo = repoFromGithub ?? process.env.npm_package_name;
const isUserSite = owner && repoFromGithub && repoFromGithub.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}` : '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base
		},
		prerender: {
			entries: ['*']
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
