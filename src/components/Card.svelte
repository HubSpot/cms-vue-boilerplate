<script>
  import './Card.scss';

  let count = 0;

  const increment = () => {
    count++;
  };
</script>

<div class="cms-svelte-boilerplate__card">
  {#if count === 0}
    <p>There are so many reasons to use HubSpot CMS + Svelte!</p>
  {:else if count === 1}
    <p>There is 1 reason to use HubSpot CMS + Svelte!</p>
  {:else}
    <p>{`There are ${count} reasons to use HubSpot CMS + Svelte!`}</p>
  {/if}
  <button class="btn" on:click={increment}>Click me!</button>
</div>
