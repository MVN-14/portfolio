<div>
  <h1>
    <span id="welcome">Welcome</span><br />
    <span id="to-my">to my</span>
    <span id="portfolio" class="accent-1 bold">portfolio.</span>
  </h1>

  <p>
    I am a <span class="bold">passionate</span> software developer who
    <span class="italic bold">loves</span> to
    <span class="accent-1 bold">learn</span>,
    <span class="accent-1 bold">write</span>
    and
    <span class="accent-1 bold">configure</span>
    cool tech.
  </p>

  <section>
    <a href="/about">About Me</a>
    <a href="/projects">My Projects</a>
    <a href="/qualifications">Experience</a>
  </section>
</div>

<style lang="scss">
  div {
    text-align: center;

    h1 {
      color: gray;
      padding: 0;

      #welcome {
        font-size: 148px;
        color: var(--text);
      }

      #to-my {
        font-size: 60px;
      }

      #portfolio {
        font-size: 98px;
        font-weight: bold;
      }
    }

    p {
      font-size: 38px;
    }

    section {
      display: flex;
      justify-content: space-between;
      padding-top: 8em;
      margin: 0 auto;
      max-width: 1000px;

      a {
        font-size: 38px;
        text-decoration: none;
        font-weight: bold;
        border: solid 5px orange;
        padding: 0.5em;
        color: var(--text);
      }
    }
  }

  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  .accent-1 {
    color: var(--accent-1);
  }
</style>
