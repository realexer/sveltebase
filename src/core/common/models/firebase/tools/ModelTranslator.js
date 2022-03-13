import * as JsonTranslator from "sickspack/json-translator";
import translations from "../../../../../_langs/translations";
import {FirebaseTranslatableModel} from "../base/FirebaseTranslatableModel";

export class ModelTranslator
{
	constructor(googleTranslateApiKey)
	{
		JsonTranslator.setup(googleTranslateApiKey, false);
	}

	/**
	 *
	 * @param {FirebaseTranslatableModel} record
	 * @param {Array} translateTo
	 */
	async translateRecord(record, translateTo)
	{
		const recordData = record.data;

		for(let translateToLang of translateTo)
		{
			if(!recordData.translations[translateTo])
			{
				const translateData = JSON.parse(JSON.stringify(recordData.translations[recordData.lang]));
				const translation = await JsonTranslator.translateObject(translateData, translateToLang);

				record.setTranslation(translateTo, translation);
			}
		}

		return record;
	}
}
