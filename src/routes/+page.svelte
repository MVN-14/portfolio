<div>
  <h1>
    <span id="welcome" class="italic">Welcome</span> to my
    <span class="orange">portfolio.</span>
  </h1>

  <p>
    I am a passionate software developer who <span class="italic">loves</span> to
    learn, write and configure cool tech.
  </p>

  <div id="skills">
    <h2 class="orange">My skills.</h2>
  </div>
</div>

<style lang="scss">
  div {
    width: 80%;
    margin: 0 auto;

    h1 {
      font-size: 84px;
      padding-top: 1em;
      color: gray;

      #welcome {
        font-size: 98px;
        color: var(--text);
      }
    }

    p {
      font-size: 38px;
    }

    #skills {
      padding: 3em 0 0 0;
      width: 100%;
    }

    h2 {
      font-size: 52px;
    }
  }

  .italic {
    font-style: italic;
  }

  .orange {
    color: orange;
  }
</style>

