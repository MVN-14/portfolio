<script lang="ts">
  import { page } from "$app/state";
  import { lineHeight } from "$lib/constants";
  import { getPageHeight } from "$lib/util";
  import { onMount } from "svelte";

  let numLines = $state(0);
  onMount(() => {
    numLines = getPageHeight() / lineHeight;
  });
</script>

<div>
  {#each { length: numLines }, i}
    <div>
      <p>
        {i + 1}
      </p>
    </div>
  {/each}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    width: min-content;

    p {
      padding: 0;
      margin: 0;
      color: gray;
      text-align: right;
      width: 40px;
      height: 20px;
    }
  }
</style>
