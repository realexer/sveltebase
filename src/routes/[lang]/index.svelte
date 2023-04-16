<script>
import {_lang} from "sickspack/multilang/lang";
import Lang from "sickspack/multilang/Lang.svelte";
import Metadata from "../../app/components/general/Metadata.svelte";
</script>

<Metadata page="index"/>

<div class="index-page">
	<section class="container center-align">
		<div class="big-heading">
			<h1 class=""><Lang key="page.index.intro.heading"/></h1>
			<p class="flow-text subheading"><Lang key="page.index.intro.description"/></p>
		</div>
		<div class="card-panel">
			<p class="flow-text"><Lang key="page.index.intro.content"/></p>
		</div>
	</section>

	<section class="container center-align">
		<h2><Lang key="page.index.sections.features.heading"/></h2>

		<div class="row">
			{#each Object.keys(_lang('page.index.sections.features.items')) as item, i}
				{#if (i > 0 && i % 2 == 0)}
					<div class="row"></div>
				{/if}
				<div class="col l6 s12">
					<h3><Lang key="page.index.sections.features.items.{item}.heading"/></h3>
					<div class="card-panel">
						<div class="flow-text">
							<Lang key="page.index.sections.features.items.{item}.description"/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="container center-align">
		<h2><Lang key="page.index.sections.drawbacks.heading"/></h2>

		<div class="row">
			{#each Object.keys(_lang('page.index.sections.drawbacks.items')) as item, i}
				{#if (i > 0 && i % 2 == 0)}
					<div class="row"></div>
				{/if}
				<div class="col l6 s12">
					<h3><Lang key="page.index.sections.drawbacks.items.{item}.heading"/></h3>
					<div class="card-panel">
						<div class="flow-text">
							<Lang key="page.index.sections.drawbacks.items.{item}.description"/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="container center-align">
		<h2><Lang key="page.index.sections.firebase_downsides.heading"/></h2>

		<div class="row">
			{#each Object.keys(_lang('page.index.sections.firebase_downsides.items')) as item, i}
				{#if (i > 0 && i % 2 == 0)}
					<div class="row"></div>
				{/if}
				<div class="col l6 s12">
					<h3><Lang key="page.index.sections.firebase_downsides.items.{item}.heading"/></h3>
					<div class="card-panel">
						<div class="flow-text">
							<Lang key="page.index.sections.firebase_downsides.items.{item}.description"/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
