<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";

  const { children } = $props();
  let selected = $state("");

  $effect(() => {
    selected = page.url.pathname;
    console.log(selected);
  });
</script>

{#snippet fileItem(filename: string)}
  <li class:selected={selected === "/" + filename.toLowerCase()}>
    <a href={"/" + filename.toLowerCase()}>
      <i class="fa brands fa-html5"></i><span>{filename}</span>{".html"}</a
    >
  </li>
{/snippet}

<main>
  <aside>
    <ul>
      <li class:selected={selected === "/"}>
        <a href="/">~/<span>Portfolio</span>/..</a>
      </li>
      {#each ["About", "Projects", "Qualifications"] as item}
        {@render fileItem(item)}
      {/each}
    </ul>
  </aside>

  <section>
    {@render children()}
  </section>
</main>

<style lang="scss">
  main {
    display: flex;

    section {
      padding: 2em;
    }

    aside {
      position: sticky;
      top: 0;
      left: 0;
      width: fit-content;
      border-right: solid 6px var(--grey);
      height: 100svh;

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
            padding: 0.5em;
            color: grey;
            width: 100%;
            cursor: pointer;
            text-decoration: none;

            i {
              padding-right: 0.3em;
            }

            span {
              color: lightblue;
              font-weight: bolder;
            }
          }
        }

        .selected {
          background-color: #000000;
          color: white;
        }
      }

      .fa-html5 {
        color: #c5502f;
      }
    }
  }
</style>
