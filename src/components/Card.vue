<template>
  <div className="cms-vue-boilerplate-card">
    <p>
      {{ reasonsText }}
    </p>
    <button className="btn" v-on:click="increaseClickCount">
      Click me!
    </button>
  </div>
</template>

<script>
const pluralize = (n, noun, suffix) => `${n !== 1 ? 'are' : 'is'} ${n} ${noun + (n !== 1 ? suffix : '')}`;

export default {
  name: 'Card',
  props: ['initialClickCount'],
  data: function() {
    return {
      reasonsCount: this.initialClickCount,
    };
  },
  computed: {
    reasonsText() {
      return `There are ${
        this.reasonsCount > 0
          ? pluralize(this.reasonsCount, 'reason', 's')
          : 'so many reasons'
      } to use HubSpot CMS + Vue!`
    }
  },
  methods: {
    increaseClickCount() {
      this.reasonsCount += 1;
    },
  },
};
</script>
