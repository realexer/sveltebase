<script>

import Multilang from "sickspack/multilang";
import Lang from 'sickspack/multilang/Lang.svelte';
import {lang_url} from "../general/lang_url";

const availableLangs = Multilang.getSupportedLanguages();

</script>

<footer class="page-footer">
	<div class="container">
		<div class="row">
			<div class="col m4 s6">
				<h5><Lang key="layout.footer.info.heading"/></h5>
				<p><a href="{lang_url('info/about')}"><Lang key="layout.footer.info.links.about"/></a></p>
			</div>

			<div class="col m4 s12">
				<h5><Lang key="layout.footer.languages.heading"/></h5>
				{#each Object.keys(availableLangs) as key}
					<p><a href="/{key}/" rel="external">{availableLangs[key]}</a></p>
				{/each}
			</div>
		</div>
	</div>
	<p>&nbsp;</p>
</footer>