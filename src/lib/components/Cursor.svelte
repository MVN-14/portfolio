<script lang="ts">
  import { lineHeight, sidebarWidth } from "$lib/constants";

  let { X, Y }: { X: number; Y: number } = $props();
</script>

<div
  id="cursor"
  style={`top: ${Y}px; left:${X}px; height: ${lineHeight - 4}px`}
  class:out-of-bounds={X <= sidebarWidth}
></div>

<style>
  div {
    position: absolute;
    width: 9px;
    border: solid gray 2px;

    animation-name: blink;
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;

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
  }

  .out-of-bounds {
    left: var(--sidebarWidth);
  }
</style>
