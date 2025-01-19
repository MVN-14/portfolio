<script lang="ts">
  import { lineHeight } from "$lib/constants";
  import { cursorData } from "$lib/state.svelte";
</script>

<div style={`top: ${cursorData.Y + 5}px; height: ${lineHeight - 4}px`}></div>

<style>
  div {
    position: absolute;
    left: calc(var(--sidebar-width) + 45px);
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
</style>
