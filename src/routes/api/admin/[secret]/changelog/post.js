import {ChangelogService} from "../../../../../core/services/ChangelogService";
import {requireSecret} from "./../index";
import env from "../../../../../env";

export async function post(req, res)
{
	requireSecret(req);

	const record = {
		translations: {
			[env.default_lang]: {
				headline: req.body.headline,
				details: req.body.details,
			},
		},
		version: req.body.version,
		public: false,
	};

	const postResult = await ChangelogService.create(record);
	res.send(JSON.stringify(postResult));
}