import {dbAccessorAdmin} from "../firebase/admin";
import {ApiResult} from "sickspack/http_api_client/base/ApiResult";
import {ChangelogModel} from "../common/models/firebase/ChangelogModel";
import env from "../../env";

class ChangelogService
{
	static async create(data)
	{
		return await ApiResult.fromPromise(async () =>
		{
			const record = new ChangelogModel(Object.assign({
				version: null,
				translations: {
					[env.default_lang]: {
						headline: null,
						details: null,
					}
				},
				lang: env.default_lang,
				public: false,
				date: new Date(),
			}, data));

			const result = await dbAccessorAdmin.changelog().add(record);

			return (await ChangelogService.getRecord(result.id)).data();
		});
	};

	/**
	 *
	 * @param record {ChangelogModel}
	 * @returns {Promise<void>}
	 */
	static async update(record)
	{
		const result = await dbAccessorAdmin.changelog().doc(record.id).set(record);

		return (await ChangelogService.getRecord(record.id)).data();
	}

	/**
	 *
	 * @returns {Promise<ChangelogModel[]>}
	 */
	static async getAllRecord()
	{
		return (await dbAccessorAdmin.changelog()
			.where('public', '=', true)
			.orderBy('date', 'desc')
			.get()).docs.map(d => d.data());
	}

	static async getRecord(id)
	{
		return await dbAccessorAdmin.changelog().doc(id).get();
	}
}

export {ChangelogService};
