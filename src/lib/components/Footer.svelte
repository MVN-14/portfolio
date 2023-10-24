<script lang="ts">
	import githubLogo from '$lib/assets/github-icon-white.png';
	import linkedInLogo from '$lib/assets/linkedin.png';
	import resume from '$lib/assets/Resume.pdf';
	import transcript from '$lib/assets/transcript.pdf';
</script>

<div id="container">
	<div id="links">
		<a href={resume} target="_blank">Resume</a>
		<a href={transcript} target="_blank">Transcript</a>
		<a href="mailto:mvn_14@outlook.com">Email</a>
	</div>

	<div id="icons">
		<a target="_blank" href="https://github.com/MVN-14">
			<img src={githubLogo} alt="github logo" width="50" />
		</a>
		<div>
			<a target="_blank" href="https://www.linkedin.com/in/michael-nogueira-543a99219/">
				<img src={linkedInLogo} alt="linkedin logo" width="50" />
			</a>
		</div>
	</div>
</div>

<style>
	#container {
    background-color: var(--primary-foreground);
		padding: 1rem 10vw 2rem 10vw;
	}

	#links {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

  #icons {
    padding-top: 2rem;
   display: flex;
    justify-content: center;
    gap: 3rem;
  }

	a {
		text-decoration: none;
		color: grey;
		font-weight: 700;
	}
</style>
