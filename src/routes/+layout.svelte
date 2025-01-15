<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { footerData } from "$lib/state.svelte";
  import { browser } from "$app/environment";
  import { getPageHeight } from "$lib/util";
  import "../app.css";
  import Linenumbers from "$lib/components/Linenumbers.svelte";
  import { page } from "$app/state";
  import { lineHeight } from "$lib/constants";

  const { children } = $props();

  let sidebarWidth: number = $state(0);
  if (browser) {
    sidebarWidth = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--sidebar-width",
      ),
    );
  }
  let cursorX = $state(0);
  let cursorY = $state(0);

  function onClick(e: MouseEvent) {
    footerData.X = Math.round(e.pageX / lineHeight);
    footerData.Y = Math.round(e.pageY / lineHeight);
    footerData.percentage = Math.round((e.pageY / getPageHeight()) * 100);
    if (e.pageX <= sidebarWidth) {
      footerData.sidebar.X = Math.round(e.pageX / lineHeight);
      footerData.sidebar.Y = Math.round(e.pageY / lineHeight);
    }

    cursorX = footerData.X * lineHeight;
    cursorY = footerData.Y * lineHeight;
  }
</script>

<svelte:window onclick={onClick} />

<div
  id="cursor"
  style={`top: ${cursorY}px; left: ${cursorX <= sidebarWidth ? sidebarWidth : cursorX}px; height: ${lineHeight - 4}px`}
></div>
<div>
  <Sidebar />
  <main>
    <section>
      {#key page.url.pathname.length > 0}
        <Linenumbers numLines={Math.round(getPageHeight() / lineHeight)} />
      {/key}
      {@render children()}
    </section>
    <Footer />
  </main>
</div>

<style lang="scss">
  #cursor {
    position: absolute;
    width: 9px;
    border: solid gray 2px;

    animation-name: blink;
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes blink {
    0% {
      opacity: 0%;
    }
  }

  @keyframes unblink {
    100% {
      opacity: 100%;
    }
  }

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
