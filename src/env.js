import local from './_config/local/env';
import prod from './_config/prod/env';

const env =
{
	name: "SapperBase",
	domain_brand: 'SapperBase.com',
	domain: 'sapperbase.com',
	baseUrl: `https://sapperbase.com`,
	default_lang: 'en',
	translations: ['es'],
	contacts: {
		email: "contact@sapperbase.com",
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
