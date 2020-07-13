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
		page: page
	};
}
</script>
<script>
	import Nav from '../app/components/layout/Nav.svelte';
	import Footer from '../app/components/layout/Footer.svelte';

	export let lang;
	export let page;

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

<style global src='../styles/theme.scss'></style>

<header>
	<Nav/>
</header>

<main>
	<slot></slot>
</main>

<Footer/>