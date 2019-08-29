<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import Icon from "./Icon.svelte";
  import Code from "./Code.svelte";

  let show = false;

  onMount(() => {
    show = true;
  });
</script>

<div class="flex flex-col items-center justify-center text-center py-20 mt-5">
  <div class="mb-10">
    <div class="h-16">
      {#if show}
      <h1
        class="text-5xl mb-5 leading-none text-indigo-800"
        transition:fly="{{ delay: 100, duration: 500, y: -10, }}"
      >
        <Icon type="tag"></Icon> is-velte
      </h1>
      {/if}
    </div>

    <div class="h-10">
      {#if show}
      <p
        class="text-gray-500"
        transition:fly="{{ delay: 250, duration: 500, y: -10, }}"
      >
        Create any html tag in Svelte using it's name as string
      </p>
      {/if}
    </div>
  </div>

  <div>
    <Code>yarn add is-velte</Code>

    &

    <Code>{`<Is tag="h1">Hello Svelte</Is>`}</Code>
  </div>
</div>
