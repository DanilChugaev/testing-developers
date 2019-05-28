<script>
import gql from 'graphql-tag';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginView',

  apollo: {
    users: gql`query {
      users {
        email
        password
      }
    }`,
  },

  components: {
    LoginForm,
  },

  data() {
    return {
      title: 'Authorization',
      type: 'Log in',
      sending: false, // for form preloader on submit button
    };
  },

  methods: {
    async login(user) {
      this.$apollo.queries.users.refetch();
      console.log(this.users);
      console.log(user);
    },
  },
};
</script>

<template lang="pug">
  login-form.pa-5.mt-5(
    :title='title'
    :type='type'
    :sending='sending'
    @submit='login'
  )
</template>

<style scoped>

</style>
