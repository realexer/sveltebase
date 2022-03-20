<script>
import {_lang} from "sickspack/multilang/lang";
import Lang from "sickspack/multilang/Lang.svelte";
import Metadata from "../../../app/components/general/Metadata.svelte";
</script>

<Metadata page="info.about"/>

<section class="container center-align">
	<h1 class=""><Lang key="page.info.about.heading"/></h1>
	<p class="flow-text"><Lang key="page.info.about.description"/></p>
</section>

<div class="divider"></div>

<section class="container center-align">
	<h2><Lang key="page.info.about.sections.disclaimer.heading"/></h2>
	<p class="flow-text"><Lang key="page.info.about.sections.disclaimer.content"/></p>
</section>

<div class="divider"></div>

<section class="container center-align">
	<h2><Lang key="page.info.about.sections.backstory.heading"/></h2>
	<p class="flow-text"><Lang key="page.info.about.sections.backstory.content"/></p>
</section>
