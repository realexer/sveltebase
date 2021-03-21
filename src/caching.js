export const cacher = (req, res, next) =>
{
	res.set('Cache-Control', 'public, max-age=60, s-maxage=600');

	next();
};