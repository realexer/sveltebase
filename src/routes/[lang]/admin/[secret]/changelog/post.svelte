<script context="module">
export async function preload(page, session)
{
	return {
		secret: page.params.secret,
	};
}
</script>

<script>
import {_lang} from "sickspack/multilang/lang";
import Lang from "sickspack/multilang/Lang.svelte";
import Metadata from "../../../../../app/components/general/Metadata.svelte";

export let secret;
let changelogForm;

const postRecord = async () =>
{
	console.log(changelogForm);
	const formData = new FormData(changelogForm);

	console.log(JSON.stringify(Object.fromEntries(formData)));

	const response = await fetch(`/api/admin/${secret}/changelog/post`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(Object.fromEntries(formData)),
	});

	const result = await response.json();

	console.log(result);
};
</script>

<Metadata page="changelog"/>

<div class="container center-align">
	<h1 class=""><Lang key="page.changelog.heading"/></h1>
</div>
<div class="divider"></div>
<div class="container center-align">
	<p class="flow-text"><Lang key="page.changelog.description"/></p>
</div>

<div class="container center-align">
	<form method="POST" on:submit|preventDefault={postRecord} bind:this={changelogForm}>
		<div class="input-field">
			<input name="headline" id="headline" type="text" class="" value=""/>
			<label class="" for="headline">Headline</label>
		</div>
		<div class="input-field">
			<input name="version" id="version" type="text" class="" value=""/>
			<label class="" for="version">Version</label>
		</div>
		<div class="input-field">
			<textarea name="details" id="details" class="materialize-textarea"></textarea>
			<label class="" for="details">Details</label>
		</div>
		<button type="submit" class="btn">Send record</button>
	</form>
</div>