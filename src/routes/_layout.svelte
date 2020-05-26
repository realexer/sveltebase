<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style global src='../styles/theme.scss'></style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>