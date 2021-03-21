import local from './_config/local/env';

const env =
{
	name: "SapperBase",
	domain_brand: 'SapperBase.com',
	domain: 'sapperbase.com',
	baseUrl: `https://sapperbase.com`,
	default_lang: 'en',
	contacts: {
		email: "contact@sapperbase.com",
	}
};

export default Object.assign({}, env, local);