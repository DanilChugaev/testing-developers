<template lang="pug">
    v-app
        Header

        v-content
            router-view

        Footer
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  .material-design-icon,
  .material-design-icon > .material-design-icon__svg {
    height: 24px;
  }
  .material-design-icon__svg path title {
    user-select: none;
  }
</style>
