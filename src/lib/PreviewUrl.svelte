<svelte:options tag="preview-url" />

<script lang="ts">
	export let url: string;
  export let shortened: 'yes' | 'no' = 'no';

  // only get data if that is shortened url
  if (shortened === 'yes') {
    const getUrl = async () => {
      const apiUrl = 'https://twt-decode-url.productsway.com?url=';
      const response = await fetch(apiUrl + url);
      const data = await response.json();
      url = data.url;
    };

    getUrl();
  }
  
</script>

<div role="contentinfo" class="preview-url">
  <a class="link" href="{url}" target="_blank" rel="noopener noreferrer">{url}</a>
</div>

<style>
	.preview-url {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

   /* Style the link */
  .link {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(to right, blue, purple);
    color: white;
    text-decoration: none;
    transition: transform 0.3s;
  }
  
  /* Add a hover effect to the link */
  .link:hover {
    transform: scale(1.1);
  }

	@media (min-width: 640px) {
		.preview-url {
			max-width: none;
		}
	}
</style>
