import en from './default';
import es from './es';

import overrides_all from './overrides/all';
import {mergeDeep} from "sickspack/deep-merge";

const applyOverrides = (lang, custom = {}) =>
{
	return mergeDeep({}, en, lang, overrides_all, custom);
};

export default {
	en: en,
	es: applyOverrides(es),
}