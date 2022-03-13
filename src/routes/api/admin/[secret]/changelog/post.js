import {ChangelogService} from "../../../../../core/services/ChangelogService";
import {requireSecret} from "./../index";
import env from "../../../../../env";
import {ModelTranslator} from "../../../../../core/common/models/firebase/tools/ModelTranslator";

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

	if(postResult.isSuccess())
	{
		const modelTranslator = new ModelTranslator(env.googleTranslate.apiKey);

		await modelTranslator.translateRecord(postResult.data, env.translations);
		await ChangelogService.update(postResult.data);
	}

	res.send(JSON.stringify(postResult));
}
