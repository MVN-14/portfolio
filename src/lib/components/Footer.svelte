<script lang="ts">
  import { page } from "$app/state";
  import { footerData } from "$lib/state.svelte";
  const currentPage = $derived(page.url.pathname);
</script>

<footer>
  <section>
    <p class={"footer-item left coloured"}>NORMAL</p>
    <p class="footer-item right">
      portfolio/mnogueira{currentPage === "/" ? "" : currentPage}.html [-] |
      main
      <i class="fa fa-sm fa-code-branch"></i>
    </p>
  </section>

  <section>
    <p class="footer-item left">
      <i class="fa fa-html5"></i>html | {footerData.percentage}%
    </p>
    <p class={"footer-item right coloured"}>
      {`${footerData.Y}:${footerData.X}`}
    </p>
  </section>
</footer>

<style lang="scss">
  $colour: #d787d7;

  footer {
    position: sticky;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    font-size: var(--status-font-size);

    section {
      display: flex;

      i {
        padding-right: 0.5em;
      }

      .footer-item {
        padding: 0.2em 0.8em;
        margin: 0.2em 0;
        background-color: #000000;
      }

      .right {
        border-right: 0px;
        border-radius: 0 200px 200px 0;
      }

      .left {
        border-right: 0px;
        border-radius: 200px 0 0 200px;
      }

      .coloured {
        background-color: $colour;
        color: #000;
      }
    }
  }
</style>
