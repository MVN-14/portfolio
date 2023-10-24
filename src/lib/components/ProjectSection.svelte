<script lang="ts">
	import Project from './Project.svelte';
	import cahImg from '$lib/assets/cah-cropped.png';
	import spotifyTrackerImg from '$lib/assets/spotify-tracker-cropped.png';
	import tunerImg from '$lib/assets/tuner.png';
  import vercelLogo from "$lib/assets/vercel.png"
  import githubLogo from "$lib/assets/github-icon-white.png"
  import edgeLogo from "$lib/assets/edge-logo.png";
  import chromeLogo from "$lib/assets/chrome-logo.png";
</script>

<div id="container">
	<h1 class="text-800">My Projects</h1>
	<div id="projects">
		<Project
			name="Clone Against Humanity"
			src={cahImg}
			description="Clone Against Humanity is a clone of Cards Against Humanity written as an exercise to learn the svelte frame work and exercise socket.io. The client is hosted on Vercel, and the server is hosted on Render"
      links={[
        {text: "View Live", href: "https://cah.mnogueira.ca", logo: vercelLogo },
        {text: "GitHub", href: "https://github.com/MVN-14/CAHClient", logo: githubLogo}
      ]}
    tags={["svelte", "svelteKit", "socket.io", "TypeScript"]}
		/>
		<Project
			name="Spotify Tracker"
			src={spotifyTrackerImg}
			description="Spotify Tracker is a project that lets spotify users interact with their personal data to see top songs/artists, recently played tracks, profile information, track/artist information, recommended tracks based on tracks or artists and more."
      links={[
        {text: "GitHub", href: "https://github.com/MVN-14/SpotifyTracker", logo: githubLogo}
      ]}
      tags={["Angular", "RxJS", "Node", "Express", "TypeScript"]}
		/>
    <Project
			name="Guitar Tuner Extension"
			src={tunerImg}
			description="This is a web extention for Chrome and Edge browsers thats plays the acoustic notes of E Standard tuning to tune a guitar to standard tuning"
      links={[
        {text: "Chrome", href: "https://cah.mnogueira.ca", logo: chromeLogo },
        {text: "Edge", href: "https://microsoftedge.microsoft.com/addons/detail/standard-guitar-tuner/dbnlmanoohhnpdpmepdekafdmkkiacon", logo: edgeLogo},
        {text: "GitHub", href: "https://chrome.google.com/webstore/detail/standard-guitar-tuner/cbjcfjfglkgbcjpahfpnmmokkmbjfedl", logo: githubLogo}
      ]}
      tags={["Manifest V3", "HTML5", "JaveScript"]}
		/>
	</div>
</div>

<style>
	#container {
		padding: 2rem 10vw;
    background-color: var(--primary-foreground)
	}

  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

	#projects {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
    padding-bottom: 3rem;
	}

</style>
