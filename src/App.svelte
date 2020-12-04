<script>
  export let code;
  import svelteLogo from './assets/svelte.svg';
  import sprocketLogo from './assets/sprocket.svg';
  import Card from './components/Card.svelte';
</script>

<style>
  .code {
    color: purple;
  }
</style>

<div class="cms-svelte-boilerplate">
  <div class="cms-svelte-boilerplate__container">
    <div class="spinning-logo__container">
      <img class="spinning-logo" src={svelteLogo} alt="svelte logo" />
      <img
        class="spinning-logo spinning-logo--sprocket"
        src={sprocketLogo}
        alt="sprocket logo" />
    </div>
    <p>
      Edit
      <code class="code">{code}</code>
      and save to reload.
    </p>
    <Card />
  </div>
</div>
