<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sometype+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	:root {
		--primary-foreground: #7ddf64;
		--primary-background: #c0df85;
		--background: #deb986;
		--secondary-foreground: #db6c79;
		--secondary-background: #ed4d6e;
	}
  
	:global(html, body) {
    padding: 0;
    margin: 0;
		background-color: var(--background);
		font-family: 'Montserrat', sans-serif;
	}

  :global(.mono) {
    font-family: 'Sometype Mono', monospace;
  }

  :global(.highlight-secondary) {
    color: var(--secondary-foreground); 
  }

  :global(.bold) {
    font-weight: bold;
  }

</style>
