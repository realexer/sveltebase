<script context="module">
export async function preload(page, session)
{
	const response = await this.fetch('api/changelog/all');
	const records = await response.json();

	return {
		records: records,
	};
}
</script>

<script>
import {_lang} from "sickspack/multilang/lang";
import Lang from "sickspack/multilang/Lang.svelte";
import Metadata from "../../../app/components/general/Metadata.svelte";

export let records;


</script>

<Metadata page="changelog"/>

<div class="container center-align">
	<h1 class=""><Lang key="page.changelog.heading"/></h1>
</div>
<div class="divider"></div>
<div class="container center-align">
	<p class="flow-text"><Lang key="page.changelog.description"/></p>
</div>
<div class="container">
	{#each records as item}
		<div class="card">
			<div class="card-content">
				<h2 class="card-title">{item.version} - {item.headline}</h2>
				<p class="">{item.details}</p>
			</div>
		</div>
	{/each}
</div>