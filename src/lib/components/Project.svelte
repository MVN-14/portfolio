<script lang="ts">
	export let name: string;
	export let src: string;
	export let description: string;
	export let links: { href: string; text: string; logo: string }[];
	export let tags: string[] = [];
</script>

<div id="container">
	<h2>{name}</h2>
	<div class="tags">
		{#each tags as tag}
			<p class="tag">{tag}</p>
		{/each}
	</div>
	<img {src} alt={`${name} image`} />
	<div id="links">
		{#each links as link}
			<a class="text-700" href={link.href} target="_blank">
				<img class="logo" src={link.logo} alt={`${link.text} logo`} />
				<p class="linkText">
					{link.text}
				</p>
			</a>
		{/each}
	</div>
	<p id="description" class="text-500">{description}</p>
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		border-radius: 1.5rem;
		background-color: var(--secondary-background);
	}

	#links {
		padding: 1rem 0 0 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.linkText {
		margin: 0;
		line-height: 1.5;
	}

	a {
    color: var(--primary-background);
		text-decoration: none;
		display: flex;
		gap: 0.3rem;
		align-content: center;
	}

	h2 {
		text-align: center;
		font-size: 1.8rem;
    margin-bottom: 0;
	}

	#description {
		font-size: 1.2rem;
		padding: 0 2rem 1rem 2rem;
	}

	.logo {
		width: 25px;
		height: 25px;
	}

	.tag {
		border: solid var(--primary-background) 4px;
    border-radius: 5px;
    padding: 0.3rem;
    font-size: clamp(8px, 1vw, 1rem);
    font-weight: 700;
	}
   .tags {
    color: var(--primary-background);
    padding: 0.5rem 0 0.5rem 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

  }

  .tags p {
    margin: 0;
  }
</style>
