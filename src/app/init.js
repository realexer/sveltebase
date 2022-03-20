import env from '../env';
import langs from '../_langs';
import Multilang from "sickspack/multilang";
import {addFormat, addDefaultData} from 'sickspack/multilang/lang'

const init = () =>
{
	Multilang.setup(langs);

	addFormat(/\*\*([^*]+)\*\*/gmi, `<strong class='__txt_highlight'>$1</strong>`);
	addFormat(/\*([^\*]+)\*/gmi, `<strong>$1</strong>`);

	addDefaultData("xbrand", env.name);
	addDefaultData("xprojectname", env.name);
	addDefaultData("xdomain", env.domain);
	addDefaultData("xdomainbrand", env.domain_brand);
	addDefaultData("xbrandlink", `<a href='/'>${env.name}</a>`);
	addDefaultData("xemaillink", `<a href='mailto:${env.contacts.email}'>${env.contacts.email}</a>`);
};

export {init};
