import local from './_config/local/env';
import prod from './_config/prod/env';

const env =
{
	name: "SvelteBase",
	domain_brand: 'SvelteBase.com',
	domain: 'sveltebase.com',
	baseUrl: `https://sveltebase.com`,
	default_lang: 'en',
	translations: ['es'],
	contacts: {
		email: "contact@sveltebase.com",
	},
	dev: {
		use_emulators: false,
	},
	admin: {
		secret: null,
	},
	googleTranslate: {
		apiKey: null,
	}
};

export default Object.assign({}, env, local, prod);
