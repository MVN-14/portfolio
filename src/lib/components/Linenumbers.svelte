<script lang="ts">
  let { numLines } = $props();
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
