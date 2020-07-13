export const checkAlternatives = (url) =>
{
	return true;
};

export const replaceUrlLang = (url, from, to) =>
{
	return url.replace(`/${from}/`, `/${to}/`);
};