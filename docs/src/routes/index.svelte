<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import Code from "../components/Code.svelte";
</script>

<div class="min-h-screen bg-gray-100 pb-10">
  <div class="flex flex-col mb-5">
    <Nav></Nav>

    <Hero></Hero>
  </div>

  <div class="flex px-5 justify-center">
    <Card>
      <h3 class="text-lg mb-5 text-gray-700">Motivations:</h3>

      <div>
        <p class="mb-5 text-justify">
          Basically, I created that component to have a bit more of flexibility
          when creating specific Svelte components that handle multiple html
          tags.
        </p>

        <p class="mb-5 text-justify">
          So, the only way I manage to do this is to actually change by hand
          some parts of a Svelte generated component code, both the Client and
          Server version.
        </p>

        <p class="text-justify">
          Because that, the peer dependency will be strict tied to a Svelte
          release version, updating every time we had a new Svelte release.
        </p>
      </div>
    </Card>

    <Card>
      <h3 class="text-lg mb-5 text-gray-700">How to Use:</h3>

      <div>
        <Code block>yarn add is-velte</Code>

        <p class="my-3">Then:</p>

        <Code block>import Is from 'is-velte';</Code>

        <p class="my-3">And:</p>

        <pre class="bg-gray-700 text-gray-300 px-2 py-1 rounded">{
`<Is tag='section'>
  My Section
</Is>`}</pre>

        <p class="mt-5">The "tag" property is a "div" by default!</p>
      </div>
    </Card>

    <Card>
      <h3 class="text-lg mb-5 text-gray-700">Know Limitations:</h3>

      <div class="pl-5">
        <ul class="list-disc">
          <li class="mb-3">
            Current, we don't have a way to pass down events, like on:*. So I
            will add the most common events to the Is component.
          </li>

          <li class="mb-3">
            ...
          </li>
        </ul>
      </div>
    </Card>
  </div>
</div>
