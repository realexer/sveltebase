import {ChangelogService} from "../../../../../core/services/ChangelogService";

export async function get(req, res)
{
	const records = await ChangelogService.getAllRecord();

	res.send(JSON.stringify(records.map(item => item.data)));
}