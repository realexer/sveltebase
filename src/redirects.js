export const redirector = (req, res, next) =>
{
	const rules = [
		[/^\/(en)\/?$/, '/'],
		//[/^\/(?<lang>[a-z]{2})\/not_found?$/, '/{lang}/not_found_new'], // example
	];

	for(let [condition, redirect] of rules)
	{
		const match = req.path.match(condition);
		if (match) {
			let redirectUrl = req.path.replace(condition, redirect);

			for (let group in match.groups) {
				redirectUrl = redirectUrl.replace(`{${group}}`, match.groups[group]);
			}

			res.redirect(301, redirectUrl);
			return;
		}
	}

	next();
};