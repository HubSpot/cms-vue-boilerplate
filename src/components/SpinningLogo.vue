<template>
  <img :class="imgClass" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'SpinningLogo',
  props: ['isSprocket', 'src', 'alt'],
  computed: {
    imgClass: function() {
      return this.isSprocket
        ? 'spinning-logo spinning-logo--sprocket'
        : 'spinning-logo';
    },
  },
};
</script>

<style lang="scss">
.spinning-logo__container {
  flex-direction: row;
  .spinning-logo {
    animation: spinning-logo infinite 20s linear;
    height: 300px;
    &:nth-child(even) {
      animation-direction: reverse;
    }
  }
  .spinning-logo--sprocket {
    transform-origin: 64.8% 55.4%;
    left: -130px;
    position: relative;
  }
}
@keyframes spinning-logo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
