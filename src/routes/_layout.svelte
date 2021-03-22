<script context="module">
import env from '../env';
import Multilang from "sickspack/multilang";
import {init} from '../app/init';
import {replaceUrlLang, checkAlternatives} from "../app/hreflang";

init();

const availableLangs = Multilang.getSupportedLanguages();

export async function preload(page, session)
{
	const langMatch = page.path.match(/\/(?<lang>[\w]+)\/?/);
	const lang = langMatch ? langMatch.groups.lang : env.default_lang;

	const canonical_url = `${env.baseUrl}${page.path}`;

	if(page.path === '/') {
		page.path = `/${env.default_lang}/`;
	}

	try {
		Multilang.init(lang);
	} catch(e) {
		this.redirect(302, '/not_found');
	}

	return {
		lang: lang,
		page: page,
		page_url: canonical_url,
	};
}
</script>
<script>
import Canonical from '../app/components/general/Canonical.svelte';
import GoogleAnalytics from '../app/components/lib/GoogleAnalytics.svelte';
import Nav from '../app/components/layout/Nav.svelte';
import Footer from '../app/components/layout/Footer.svelte';

export let lang;
export let page;
export let page_url;

Multilang.init(lang);

</script>

<svelte:head>
	{#if checkAlternatives(page.path)}
		{#each Object.keys(availableLangs) as hrefLang}
		<link rel="alternate" hreflang="{hrefLang}" href="{env.baseUrl}{replaceUrlLang(page.path, lang, hrefLang)}" />
		{/each}
		<link rel="alternate" hreflang="x-default" href="{env.baseUrl}{replaceUrlLang(page.path, lang, env.default_lang)}" />
	{/if}
</svelte:head>

<Canonical url="{page_url}"/>
<GoogleAnalytics gtag_id=""/>

<style global src='../styles/theme.scss'></style>

<header>
	<Nav/>
</header>

<main>
	<slot></slot>
</main>

<Footer/>