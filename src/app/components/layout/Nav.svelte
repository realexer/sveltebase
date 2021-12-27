<script>
import {stores} from "@sapper/app";
import {lang_url} from "../general/lang_url";
import {_lang} from 'sickspack/multilang/lang';
import Lang from 'sickspack/multilang/Lang.svelte';

const { page } = stores();
</script>

<style>

</style>

<nav class="">
	<div class="nav-wrapper">
		<ul class="">
			<li class:active="{$page.path == lang_url()}">
				<a  href='{lang_url()}'>
					<span class="brand-logo" style="position: relative;"><Lang key="layout.nav.links.home.text"/></span>
				</a>
			</li>
			<li class:active="{$page.path == lang_url('info/about')}">
				<a href="{lang_url('info/about')}" title="{_lang('layout.nav.links.about.title')}">
					<span><Lang key="layout.nav.links.about.text"/></span>
				</a>
			</li>
			<li class:active="{$page.path == lang_url('changelog')}">
				<a href="{lang_url('changelog')}" title="{_lang('layout.nav.links.changelog.title')}">
					<span><Lang key="layout.nav.links.changelog.text"/></span>
				</a>
			</li>
		</ul>
	</div>
</nav>