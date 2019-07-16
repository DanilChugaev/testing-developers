<script>
import gql from 'graphql-tag';
import LoginForm from '@/components/LoginForm.vue';

const regUser = gql`
  mutation regUser($email: String!, $password: String!) {
    regUser(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default {
  name: 'LoginView',

  components: {
    LoginForm,
  },

  data() {
    return {
      title: 'Registration',
      btnText: 'Create an account',
      isSending: false, // for form preloader on submit button
    };
  },

  methods: {
    async signup({ email, password }) {
      try {
        const result = await this.$apollo.mutate({
          mutation: regUser,
          variables: {
            email,
            password,
          },
        });

        console.log(result);
      } catch (error) {
        console.log(error.toString());
      }
    },
  },
};
</script>

<template lang="pug">
  login-form.signup.pa-5.mt-5(
    :title='title'
    :btnText='btnText'
    :isSending='isSending'
    @submit='signup'
  )
</template>

<style scoped>
.signup {
  width: 500px;
  margin: 0 auto;
}
</style>
