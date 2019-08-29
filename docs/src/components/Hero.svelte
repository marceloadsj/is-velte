<script>
  import { onMount } from "svelte";

  import Icon from "./Icon.svelte";
  import Code from "./Code.svelte";
</script>

<div class="flex flex-col items-center justify-center text-center py-20 mt-5">
  <div class="mb-10">
    <div class="h-16">
      <h1 class="text-5xl mb-5 leading-none text-indigo-800">
        <Icon type="tag"></Icon> is-velte
      </h1>
    </div>

    <div class="h-10">
      <p class="text-gray-500">
        Create any html tag in Svelte using it's name as string
      </p>
    </div>
  </div>

  <div>
    <Code>yarn add is-velte</Code>

    &

    <Code>{`<Is tag="h1">Hello Svelte</Is>`}</Code>
  </div>
</div>
