<script>
  import feather from "feather-icons";

  export let type;
</script>

{@html feather.icons[type].toSvg({ class: "inline-block" })}
