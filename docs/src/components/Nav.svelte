<script>
  import Icon from "./Icon.svelte";
  import Button from "./Button.svelte";
</script>

<div
  class="flex justify-between bg-white z-10 px-5 py-2 items-center border-b border-gray-200 fixed w-full"
>
  <div>
    <Icon type="tag"></Icon> is-velte
    <div class="p-1 bg-indigo-500 text-white inline rounded text-xs">0.0.1</div>
  </div>

  <Button link href="https://github.com/marceloadsj/is-velte" target="_blank"
    ><Icon type="github"></Icon> Github</Button
  >

  <!-- <button
  class="text-xs bg-indigo-600 px-2 py-1 rounded text-indigo-900 block hover:bg-indigo-400"
>
  Donate
</button> -->
</div>
