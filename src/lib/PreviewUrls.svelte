<svelte:options tag="preview-urls" />

<script lang="ts">
	export let urls: string[];
  export let isShortend: boolean = false;
</script>

<div class="preview-urls">
  <pre>{JSON.stringify(urls,null,2)}</pre>
</div>

<style>
	.preview-urls {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		.preview-urls {
			max-width: none;
		}
	}
</style>
