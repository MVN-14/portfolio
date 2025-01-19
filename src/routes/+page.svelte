<div>
  <h1>
    <span id="welcome" class="italic">Welcome</span><br />
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
    text-align: center;

    h1 {
      color: gray;
      padding: 3em 0;

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
      width: 80%;
      padding-top: 4em;
      margin: 0 auto;

      a {
        font-size: 38px;
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
