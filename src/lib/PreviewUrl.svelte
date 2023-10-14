<svelte:options customElement="preview-url" />

<script lang="ts">
  import redaxios from 'redaxios';
  import logger from 'consola';

	export let url: string;
  export let shortened: 'yes' | 'no' = 'no';

  const originalUrl = url;
  // only get data if that is shortened url
  if (shortened === 'yes') {
    const getUrl = async () => {
      const apiUrl = 'https://twt-decode-url.productsway.com?url=';
      try {
        const response = await redaxios.get<{
          url: string 
        }>(apiUrl + url);
        url = response.data.url;
      } catch (error) {
        logger.error(error);
      }
    };

    getUrl();
  }
  
</script>

<div role="contentinfo" class="preview-url" data-tooltip={originalUrl}>
  <a class="link" href="{url}" target="_blank" rel="noopener noreferrer">{url}</a>
</div>

<style>
  /* Style the tooltip */
  [data-tooltip] {
    position: relative;
    display: inline-block;
  }

  [data-tooltip]::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    visibility: hidden;
    background-color: #555;
		color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    min-width: 100px;
  }

  [data-tooltip]:hover::before {
    visibility: visible;
  }

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

  /** truncate the url on mobile */
  @media (max-width: 640px) {
    .link {
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
