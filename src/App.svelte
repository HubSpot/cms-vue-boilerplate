<script>
  export let name;
  import svelteLogo from './assets/svelte.svg';
  import sprocketLogo from './assets/sprocket.svg';
  import Card from './components/Card.svelte';
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="cms-svelte-boilerplate">
  <div class="cms-svelte-boilerplate__container">
    <h1>Hello {name}!</h1>
    <div class="spinning-logo__container">
      <img class="spinning-logo" src={svelteLogo} alt="svelte logo" />
      <img
        class="spinning-logo spinning-logo--sprocket"
        src={sprocketLogo}
        alt="sprocket logo" />
    </div>
    <p>
      Edit
      <code>src/App.js</code>
      and save to reload.
    </p>
    <Card />
  </div>
</div>
