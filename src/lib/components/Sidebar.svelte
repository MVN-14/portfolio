<script lang="ts">
  import { page } from "$app/state";
  import { footerData } from "$lib/state.svelte";

  let currentPage = $derived(page.url.pathname);
  const fileItems = ["about", "projects", "qualifications"];

  const footerItems = $derived([
    {
      text: "NvimTree [-]",
      direction: "right",
    },
    {
      text:
        (currentPage === "/"
          ? "0"
          : currentPage === "/about"
            ? "1"
            : currentPage === "/projects"
              ? "2"
              : "3") + `:${footerData.sidebar.X}`,
      direction: "left",
    },
  ]);
</script>

{#snippet footerItem({ text, direction }: { text: string; direction: string })}
  <p class={"footer-item " + direction}>{text}</p>
{/snippet}

{#snippet fileItem(filename: string)}
  <li class:selected={currentPage === "/" + filename.toLowerCase()}>
    <a href={"/" + filename.toLowerCase()}>
      <i class="fa brands fa-html5"></i><span>{filename}</span>{".html"}</a
    >
  </li>
{/snippet}

<aside>
  <ul>
    <li class:selected={currentPage === "/"}>
      <a href="/">~/<span>Michael</span>/<span>Portfolio</span>/..</a>
    </li>
    {#each fileItems as item}
      {@render fileItem(item)}
    {/each}
  </ul>

  <footer>
    {#each footerItems as item}
      {@render footerItem(item)}
    {/each}
  </footer>
</aside>

<style lang="scss">
  $item-colour: orange;
  $background-colour: #1c1c1c;

  aside {
    position: sticky;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    /*border-right: solid 6px var(--grey);*/
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $background-colour;

    ul {
      width: 100%;
      margin: 0;
      list-style: none;
      padding: 0;

      li:not(.selected):hover {
        background-color: #111111;
      }

      li {
        display: flex;
        margin: 0;
        width: 100%;
        font-size: 150%;
        align-items: center;

        a {
          padding: 3px 0.5em;
          color: grey;
          width: 100%;
          cursor: pointer;
          text-decoration: none;

          i {
            padding-right: 0.3em;
          }

          span {
            color: $item-colour;
            font-weight: bolder;
          }
        }
      }

      .selected {
        background-color: #000000;
        color: white;
      }
    }

    footer {
      position: sticky;
      bottom: 0;
      display: flex;
      justify-content: space-between;

      .footer-item {
        padding: 0.2em 0.8em;
        margin: 0.2em;
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
    }
  }
</style>
