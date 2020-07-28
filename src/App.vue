<template>
  <div class="cms-vue-boilerplate-container">
    <div class="spinning-logo-container">
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
import vueLogo from '@/assets/vue.svg';

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
.cms-vue-boilerplate-container {
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 1rem 0 1rem 0;
}

.spinning-logo__container {
  flex-direction: row;
}
</style>
