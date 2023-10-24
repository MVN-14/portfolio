<script lang="ts">
	import fanshaweLogo from '$lib/assets/fanshawe-cropped.png';
	import atlasImage from '$lib/assets/atlas-apex-logo.jpg';
	import stepImage from '$lib/assets/step-software-logo.png';
	import novaImage from '$lib/assets/nova-chemicals-logo.png';
	import githubLogo from '$lib/assets/github-icon-white.png';
</script>

<div id="container">
	<h1 class="text-800">Experience</h1>
	<div id="grid">
		<div>
			<h2>Education</h2>
			<div class="field">
				<img src={fanshaweLogo} alt="Fanshawe Logo" width="150" />
				<div class="fieldLabels">
					<p>Fanshawe College</p>
					<p>CPA/2</p>
					<p>September 2019 - April 2023</p>
					<p>3.9 GPA</p>
				</div>
			</div>

			<h2>Work Experience</h2>
			<div class="field">
				<img src={stepImage} alt="Step Software" width="150" />
				<div class="fieldLabels">
					<p><a target="_blank" href="https://www.stepsoftware.com/">STEP Software</a></p>
					<p>Software Developer</p>
					<p>January 2023 - April 2023</p>
				</div>
			</div>
			<div class="field">
				<img src={atlasImage} alt="Atlas Apex Roofing Inc." width="150" />
				<div class="fieldLabels">
					<p><a target="_blank" href="https://www.atlas-apex.com/">Atlas Apex Roofing</a></p>
					<p>Application Developer</p>
					<p>May 2022 - August 2022</p>
				</div>
			</div>
			<div class="field">
				<img src={novaImage} alt="Nova Chemicals" width="150" />
				<div class="fieldLabels">
					<p class="name">
						<a target="_blank" href="https://www.stepsoftware.com/">Nova Chemicals</a>
					</p>
					<p class="position">Cloud Platform Automation Developer</p>
					<p class="date">September 2021 - December 2021</p>
				</div>
			</div>
		</div>

		<div>
			<h2>Other Repos</h2>
			<div class="otherProjects">
				<div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/scripts/blob/master/cmake-helper">
							<img src={githubLogo} alt="github logo" width="25" />
							cmake-helper
						</a>
					</h3>
					<h4>
						A simple bash script I developed to build, generate, and run <a
							target="_blank"
							href="https://cmake.org/">cmake</a
						> projects from the command line.
					</h4>
				</div>

				<div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/create-wx-app">
							<img src={githubLogo} alt="github logo" width="25" />
							create-wx-app
						</a>
					</h3>
					<h4>
						A C++ console application to generates a hello world <a
							target="_blank"
							href="https://www.wxwidgets.org/">wxWidgets</a
						> GUI project configured with CMake.
					</h4>
				</div>

          <div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/nvim-config">
							<img src={githubLogo} alt="github logo" width="25" />
							nvim-config
						</a>
					</h3>
					<h4>
						My custom configuration for <a
							target="_blank"
							href="https://neovim.io/">neovim</a
						> (a code editor forked from vim).
					</h4>
				</div>


				<div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/i3blocks">
							<img src={githubLogo} alt="github logo" width="25" />
							i3blocks
						</a>
					</h3>
					<h4>
						i3blocks config and custom scripts I wrote and use for <a
							target="_blank"
							href="https://github.com/vivien/i3blocks">i3blocks</a
						> (a status bar plugin for a tiling window manager called i3wm). Includes things like nord vpn, spotify, volume
						blocks.
					</h4>
				</div>

        <div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/SDL2-TicTacToe">
							<img src={githubLogo} alt="github logo" width="25" />
							SDL2-TicTacToe
						</a>
					</h3>
					<h4>
						Simple TicTacToe game using <a
							target="_blank"
							href="https://www.libsdl.org/">
						Simple DirectMedia Layer</a>, a C API that provides low level access to graphics
					 via OpenGL.</h4>
				</div>

        <div>
					<h3>
						<a target="_blank" href="https://github.com/MVN-14/dmenu-scripts">
							<img src={githubLogo} alt="github logo" width="25" />
							dmenu-scripts
						</a>
					</h3>
					<h4>
						Shell scrpts leveraging <a
							target="_blank"
							href="https://tools.suckless.org/dmenu/">
              dmenu
						</a>, a dynamic shell menu interface i use with i3wm.</h4>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#container {
		padding: 2rem 10vw;
		margin: 0;
		background: var(--secondary-background);
	}

	.otherProjects {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.field {
		gap: 1rem;
		display: flex;
		padding-bottom: 4rem;
	}

	.fieldLabels {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.fieldLabels p {
		padding: 0;
		margin: 0;
		font-weight: 700;
    font-size: max(16px, 1.3vw);
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.3rem;
		font-weight: 500;
		margin: 0;
	}

	h4 {
		margin: 0;
		padding-top: 0.5rem;
	}

	.otherProjects a {
		font-weight: 700;
	}

	a {
		text-decoration: none;
		color: var(--primary-background);
		font-weight: 700;
	}

	#grid {
		display: grid;
		gap: 5rem;
		grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
	}
</style>
