<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import I3Bar from "$lib/components/I3Bar.svelte";
  import Linenumbers from "$lib/components/Linenumbers.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  import { footerData } from "$lib/state.svelte";
  import { getPageHeight } from "$lib/util";
  import { page } from "$app/state";
  import { lineHeight, cursorWidth, sidebarWidth } from "$lib/constants";

  const { children } = $props();

  let cursorX = $state(0);
  let cursorY = $state(0);

  function onClick(e: MouseEvent) {
    footerData.X = Math.round(e.pageX / cursorWidth);
    footerData.Y = Math.round(e.pageY / lineHeight);
    footerData.percentage = Math.round((e.pageY / getPageHeight()) * 100);
    if (e.pageX <= sidebarWidth) {
      footerData.sidebar.X = Math.round(e.pageX / lineHeight);
      footerData.sidebar.Y = Math.round(e.pageY / lineHeight);
    }

    cursorX = Math.round(footerData.X / cursorWidth);
    cursorY = footerData.Y * lineHeight;
  }
</script>

<svelte:window onclick={onClick} />

<Cursor X={cursorX} Y={cursorY} />
<I3Bar></I3Bar>
<div>
  <Sidebar />
  <main>
    <section>
      {#key page.url.pathname}
        <Linenumbers />
      {/key}
      {@render children()}
    </section>
    <Footer />
  </main>
</div>

<style lang="scss">
  div {
    display: flex;

    main {
      width: 100%;

      section {
        min-height: 100vh;
        display: flex;
      }
    }
  }
</style>
