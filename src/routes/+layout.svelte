<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import I3Bar from "$lib/components/I3Bar.svelte";
  import Linenumbers from "$lib/components/Linenumbers.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  import { footerData, cursorData } from "$lib/state.svelte";
  import { getPageHeight } from "$lib/util";
  import { page } from "$app/state";
  import { lineHeight, cursorWidth, sidebarWidth } from "$lib/constants";

  const { children } = $props();

  function onClick(e: MouseEvent) {
    footerData.X = Math.max(
      Math.round((e.pageX - sidebarWidth - 5 * cursorWidth) / cursorWidth),
      1,
    );
    footerData.Y = Math.round(e.pageY / lineHeight);
    footerData.percentage = Math.round((e.pageY / getPageHeight()) * 100);
    if (e.pageX <= sidebarWidth) {
      footerData.sidebar.X = Math.round(e.pageX / lineHeight);
      footerData.sidebar.Y = Math.round(e.pageY / lineHeight);
    }

    cursorData.X = Math.floor((footerData.X + sidebarWidth) / cursorWidth);
    cursorData.Y = footerData.Y * lineHeight;
  }
</script>

<Cursor />
<I3Bar></I3Bar>
<div>
  <Sidebar />
  <main>
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <section onclick={onClick}>
      {#key page.url.pathname}
        <Linenumbers />
      {/key}
      <div id="content-container">
        {@render children()}
      </div>
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
        min-height: calc(100vh - calc(var(--lineHeight) * 2));
        display: flex;

        #content-container {
          padding-top: 5%;
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
</style>
