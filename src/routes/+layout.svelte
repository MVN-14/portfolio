<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sometype+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

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

  :global(.text-100) {
    font-weight: 100;
  }

  :global(.text-200) {
    font-weight: 200;
  }

  :global(.text-300) {
    font-weight: 300;
  }

  :global(.text-400) {
    font-weight: 400;
  }

  :global(.text-500) {
    font-weight: 500;
  }

  :global(.text-600) {
    font-weight: 600;
  }

  :global(.text-700) {
    font-weight: 700;
  }

  :global(.text-800) {
    font-weight: 800;
  }

  :global(.text-900) {
    font-weight: 900;
  }


</style>
