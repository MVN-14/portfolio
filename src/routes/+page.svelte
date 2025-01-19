<div>
  <h1>
    <span id="welcome" class="italic">Welcome</span>
    <span id="to-my">to my</span>
    <span id="portfolio" class="orange">portfolio.</span>
  </h1>

  <p>
    I am a passionate software developer who <span class="italic">loves</span> to
    learn, write and configure cool tech.
  </p>

  <section>
    <a class="orange" href="/about">About Me</a>
    <a class="orange" href="/projects">My Projects</a>
    <a class="orange" href="/qualifications">Experience</a>
  </section>
</div>

<style lang="scss">
  div {
    width: 80%;
    margin: 0 auto;

    h1 {
      color: gray;
      display: flex;
      flex-direction: column;
      padding: 1em 0;

      #welcome {
        font-size: 98px;
        color: var(--text);
      }

      #to-my {
        font-size: 48px;
      }

      #portfolio {
        font-size: 70px;
      }
    }

    p {
      font-size: 30px;
    }

    section {
      display: flex;
      justify-content: space-between;
      width: 80%;
      padding-top: 4em;

      a {
        font-size: 24px;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  .italic {
    font-style: italic;
  }

  .orange {
    color: orange;
  }
</style>
