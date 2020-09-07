<script>
	import ButtonBSN from "./ButtonBSN.svelte";
	import BlogCard from "./BlogCard.svelte";
	export let name;
</script>



<main>
	<h1>{name}'s Components!</h1>
	<h3>Buttons</h3>
	<ButtonBSN class='button'>
		Subscribe
	</ButtonBSN>
	<h3>Blog Card Preview</h3>
	<BlogCard />
	
</main>



<style>
	main {
		display: grid;
		justify-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--begotten-red);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>