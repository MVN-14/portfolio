<script lang="ts">
  import profileImage from "$lib/img/headshot.png";
</script>

<div id="container">
  <header>
    <h1>About Me</h1>
    <img src={profileImage} alt="profile" />
  </header>

  <div>
    <h2>My Proficiencies.</h2>

    <section id="proficiencies">
      <div>
        <h3>Web Tech</h3>
        <ul>
          <li>TypeScript | JavaScript</li>
          <li>Html5 | CSS/TailwindCSS</li>
          <li>Svelte4 | Svelte5 | SveltKit</li>
          <li>NodeJS | Express</li>
          <li>REST APIs</li>
          <li>Firebase</li>
        </ul>
      </div>

      <div>
        <h3>Other Tech</h3>
        <ul>
          <li>SQL</li>
          <li>Git</li>
          <li>Linux and core utils</li>
          <li>C++ | wxWidgets</li>
          <li>C#</li>
        </ul>
      </div>
    </section>
  </div>

  <section id="interests">
    <h2>My Interests.</h2>

    <ul>
      <li>
        <a href="https://neovim.io/" target="_blank">
          <h4>Neovim</h4>
        </a>
        <p>
          <span class="bold italic">
            The UI of this portfolio is modeled after my Neovim environment.
          </span>
          I love it's configurability and plugin ecosystem. I enjoy messing around
          with my config and creating my own custom plugins. (Because why spend 5
          minutes solving a problem when you can spend 5 days writing a plugin to
          solve it for you?)
        </p>
      </li>

      <li>
        <a href="https://archlinux.org/" target="_blank">
          <h4>Arch Linux</h4>
        </a>
        <p>
          I have been daily driving linux for the last 2 years. The first year
          on Ubuntu, and this past year on Arch. I use <span class="bold italic"
            >i3wm</span
          >
          as my window manager, along side <span class="bold italic">TMUX</span>
          and <span class="bold italic">neovim</span> for a seamless and custom development
          environment.
        </p>
      </li>

      <li>
        <a href="https://go.dev/" target="_blank">
          <h4>Go</h4>
        </a>
        <p>
          I have been choosing Go for projects lately and have been enjoying the
          language.
          <span class="bold italic"
            >The top status bar of this UI is modeled after my custom i3Bar that
            executes go programs to create the output.</span
          > I have also been playing around with HTMX and a Go backend to create
          non-trivial web apps.
        </p>
      </li>
    </ul>
  </section>
</div>

<style lang="scss">
  #container {
    display: flex;
    flex-direction: column;
    gap: 4em;
    width: 100%;

    header {
      display: flex;
      gap: 1em;
      align-items: end;
      justify-content: center;
      height: min-content;
      padding: 0 0 3em 0;
      border-bottom: solid 2px black;

      h1 {
        font-size: 4.5em;
        color: var(--accent-1);
        margin: 0;
        line-height: 1;
      }

      img {
        height: 125px;
        padding-bottom: 20px;
      }
    }

    h2 {
      font-size: 3em;
      margin: 0;
      padding-bottom: 1em;
    }

    section {
      border-bottom: solid 2px black;

      h3 {
        font-size: 2.2em;
        margin: 0;
        color: gray;
      }

      h4 {
        color: var(--accent-1);
        font-size: 1.8em;
      }
    }

    #proficiencies {
      display: flex;
      justify-content: space-around;
      padding-bottom: 3em;

      ul {
        font-size: 1.5em;
        color: var(--accent-1);
        margin: 0.2em 0;
      }
    }

    #interests {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          gap: 6em;
          align-items: center;

          a {
            h4 {
              min-width: 8em;
              text-align: right;
            }
          }

          p {
            font-size: 1.2em;
          }
        }
      }

      padding-bottom: 2em;
    }
  }
</style>
