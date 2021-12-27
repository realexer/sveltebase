import {dbAccessorAdmin} from "../firebase/admin";
import {ApiResult} from "sickspack/http_api_client/base/ApiResult";
import {ChangelogModel} from "../common/models/firebase/ChangelogModel";

class ChangelogService
{
	static async create(data)
	{
		return await ApiResult.fromPromise(async () =>
		{
			const record = new ChangelogModel(Object.assign({
				version: null,
				headline: null,
				details: null,
				public: false,
				translated_to: [],
				date: new Date(),
			}, data));

			const result = await dbAccessorAdmin.changelog('en').add(record);

			return (await ChangelogService.getRecord(result.id)).data().toCompleteObject();
		});
	};

	static async getAllRecord()
	{
		return (await dbAccessorAdmin.changelog('en')
			.where('public', '=', true)
			.orderBy('date', 'desc')
			.get()).docs.map(d => d.data());
	}

	static async getRecord(id)
	{
		return await dbAccessorAdmin.changelog('en').doc(id).get();
	}
}

export {ChangelogService};