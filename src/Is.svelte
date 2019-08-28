<svelte:options accessors="{true}" />

<script context="module">
  const voidElementTags = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

  function getIsVoid(tag) {
    return voidElementTags.test(tag) || tag.toLowerCase() === "!doctype";
  }

  function getProps(props, keys) {
    const parsedProps = { ...props };

    keys.forEach(key => {
      delete parsedProps[key];
    });

    return parsedProps;
  }
</script>

<script>
  import getElement from "./getElement";

  export let tag = "div";

  $: isVoid = getIsVoid(tag);
  $: element = getElement({ tag, isVoid });

  $: props = getProps($$props, ["tag"]);
</script>

{#if isVoid}
<svelte:component {...props} on:click this="{element}"></svelte:component>
{:else}
<svelte:component {...props} on:click this="{element}">
  <slot></slot>
</svelte:component>
{/if}
