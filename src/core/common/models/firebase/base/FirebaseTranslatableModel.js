import {FirebaseModel} from "./FirebaseModel";

class FirebaseTranslatableModel extends FirebaseModel
{
	setDefaultTranslation(lang, data = {})
	{
		this.data.lang = lang;
		this.setTranslation(lang, data);
	}

	setTranslation(lang, data = {})
	{
		if(!this.data.translations) {
			this.data.translations = [];
		}

		this.data.translations[lang] = data;
	}

	getTranslation(lang)
	{
		let translation = this.data.translations[lang];
		if(!translation) {
			translation = this.data.translations[this.data.lang];
		}

		return translation;
	}

	hasTranslation(lang)
	{
		return this.data.translations[lang] != null;
	}

	needsTranslations(langs)
	{
		for(let translateToLang of langs)
		{
			if(!this.hasTranslation(translateToLang))
				return true;
		}

		return false;
	}
}

export {FirebaseTranslatableModel};
