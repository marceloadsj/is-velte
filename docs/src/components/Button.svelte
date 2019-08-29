<script>
  export let link = false;
</script>

{#if link}
<a
  {...$$props}
  class="bg-gray-100 text-indigo px-2 py-1 rounded hover:bg-gray-100"
>
  <slot></slot>
</a>
{/if}
