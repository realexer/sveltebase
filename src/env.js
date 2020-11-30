import local from './_config/local/env';

const env =
{
	domain: 'sapperbase.com',
	baseUrl: `https://sapperbase.com`,
	default_lang: 'en'
};

export default Object.assign({}, env, local);