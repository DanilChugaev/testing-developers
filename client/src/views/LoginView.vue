<script>
import gql from 'graphql-tag';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginView',

  // apollo: {
  //   user: gql`mutation (
  //       $email: String!,
  //       $password: String!
  //     ){
  //     authUser(
  //       email: $email,
  //       password: $password
  //     ){
  //       id
  //       email
  //       token
  //     }
  //   }`,
  // },

  components: {
    LoginForm,
  },

  data() {
    return {
      title: 'Authorization',
      btnText: 'Log in',
      isSending: false, // for form preloader on submit button
    };
  },

  methods: {
    async login(user) {
      // this.$apollo.queries.user.refetch();
      // console.log(this.user);
      // console.log(user);
    },
  },
};
</script>

<template lang="pug">
  login-form.login.pa-5.mt-5(
    :shouldRemember='true'
    :title='title'
    :btnText='btnText'
    :isSending='isSending'
    @submit='login'
  )
</template>

<style scoped>
.login {
  width: 500px;
  margin: 0 auto;
}
</style>
