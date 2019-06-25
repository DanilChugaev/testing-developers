<script>
import gql from 'graphql-tag';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginView',

  apollo: {
    users: gql`mutation {
      user {
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
      title: 'Registration',
      type: 'Create an account',
      sending: false, // for form preloader on submit button
    };
  },

  methods: {
    async signup(user) {
      if (this.$refs.authForm.validate()) {
      
      }
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
    @submit='signup'
  )
</template>

<style scoped>

</style>
