import en from './default';
import translations from './translations';

import overrides_all from './translations/overrides/all';
import {mergeDeep} from "sickspack/deep-merge";

const applyOverrides = (lang, custom = {}) =>
{
	return mergeDeep({}, en, lang, overrides_all, custom);
};

export default {
	en: applyOverrides(en, {}),
	es: applyOverrides(translations.es),
}