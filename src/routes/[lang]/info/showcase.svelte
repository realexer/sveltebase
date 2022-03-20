<script>
import {_lang} from "sickspack/multilang/lang";
import Lang from "sickspack/multilang/Lang.svelte";
import Metadata from "../../../app/components/general/Metadata.svelte";
import {projects} from "../../../data/projects";
</script>

<Metadata page="info.showcase"/>

<section class="container center-align">
	<h1 class=""><Lang key="page.info.showcase.heading"/></h1>
	<p class="flow-text"><Lang key="page.info.showcase.description"/></p>

	<div class="divider"></div>

	<div class="row">
		{#each Object.values(projects) as item}
			<div class="col s12">
				<h3>{item.name}</h3>
				<div class="card-panel left-align">
					<p class="flow-text">
						<Lang key="page.info.showcase.projects.list.{item.id}.description"/>
					</p>
					<p class="flow-text">
						<span>
							<Lang key="page.info.showcase.projects.item.website"/>:
						</span>
						<a href="{item.website}" target="_blank">{item.website}</a>
					</p>
				</div>
			</div>
		{/each}
	</div>

</section>
