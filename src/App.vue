<template>
  <div id="app">
    <div className="spinning-logo__container">
      <SpinningLogo :src="vueLogo" alt="Vue logo" />
      <SpinningLogo :src="sprocketLogo" alt="sprocket logo" isSprocket="true" />
    </div>
    <p>Edit <code>src/App.js</code> and save to reload.</p>
    <Card :initialClickCount="moduleData.initial_count" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import SpinningLogo from '@/components/SpinningLogo.vue';
import sprocketLogo from '@/assets/sprocket.svg';
import vueLogo from './assets/logo.svg';

export default {
  name: 'App',
  props: ['moduleData'],
  data: function() {
    return {
      sprocketLogo,
      vueLogo,
    };
  },
  created: function() {
    // eslint-disable-next-line no-console
    console.log(
      'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
      this.moduleData,
    );
  },
  components: {
    Card,
    SpinningLogo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
