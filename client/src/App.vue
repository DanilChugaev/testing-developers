<template lang="pug">
    v-app
        Header

        v-content
            div
              | {{books}}
            router-view

        Footer
</template>

<script>
import gql from 'graphql-tag';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    books: gql`query {
      books {
        title
        author
      }
    }`,
  },

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
