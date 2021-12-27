import {ChangelogService} from "../../../../../core/services/ChangelogService";
import {requireSecret} from "./../index";

export async function post(req, res)
{
	requireSecret(req);

	const record = {
		version: req.body.version,
		headline: req.body.headline,
		details: req.body.details,
		public: false,
	};

	const postResult = await ChangelogService.create(record);
	res.send(JSON.stringify(postResult));
}