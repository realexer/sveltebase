import env from "./env";

export const redirector = (req, res, next) =>
{
	const rules = [
		[/^\/?$/, `/${env.default_lang}/`],
		[/^\/(?<lang>[a-z]{2})$/, `/{lang}/`],
	];

	for(let [condition, redirect] of rules)
	{
		const match = req.path.match(condition);

		if (match)
		{
			if(typeof redirect == "function") {
				redirect = redirect(match);
			}

			let redirectUrl = req.path.replace(condition, redirect);

			for (let group in match.groups) {
				redirectUrl = redirectUrl.replace(`{${group}}`, match.groups[group]);
			}

			if(req.path != redirectUrl)
			{
				if(redirectUrl == 404) {
					res.redirect(301, '/not_found');
				} else {
					res.redirect(301, redirectUrl);
				}
				return;
			}
		}
	}

	next();
};
