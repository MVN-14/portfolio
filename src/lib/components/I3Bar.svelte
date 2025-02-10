<script lang="ts">
  let currentDate: Date = $state(new Date());
  let timeString: string = $derived(toTimeString(currentDate));
  let dateString: string = $derived(toDateString(currentDate));

  function toTimeString(date: Date): string {
    return date
      .toLocaleString("en-CA", {
        timeStyle: "short",
      })
      .replaceAll(".", "");
  }

  function toDateString(date: Date): string {
    return date.toLocaleString("en-CA", {
      dateStyle: "short",
    });
  }

  function updateClock(): void {
    currentDate = new Date();

    setTimeout(() => {
      updateClock();
    }, 1000);
  }

  updateClock();
</script>

<section>
  <p class="powerline powerline-blue" id="battery" style="z-index: 1;">
    <i class="fa fa-battery"></i>
    100%
  </p>
  <p class="powerline powerline-black" id="volume" style="z-index: 2;">
    <i class="fa fa-volume-high fa-sm"></i> 100%
  </p>
  <p class="powerline powerline-blue" id="date" style="z-index: 3;">
    {dateString}
  </p>
  <p class="powerline powerline-black" id="time" style="z-index: 4;">
    {timeString}
  </p>
</section>

<style lang="scss">
  $i3blue: #769ff0;

  section {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    height: 25px;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .powerline {
      padding: 4px 1em 1px 1em;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      width: max-content;
      min-width: 75px;
      font-size: var(--status-font-size);
    }

    #date {
      transform: translateX(8px);
    }

    #volume {
      transform: translateX(16px);
    }

    #battery {
      transform: translateX(24px);
    }

    .powerline-black {
      background-color: black;
      color: $i3blue;
    }

    .powerline-blue {
      background-color: $i3blue;
      color: black;
    }
  }
</style>
