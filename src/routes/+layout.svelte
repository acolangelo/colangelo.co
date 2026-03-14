<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
<link rel="icon" href={favicon} />
<link rel="stylesheet" href="https://use.typekit.net/mjj7eye.css">
</svelte:head>
{@render children()}
