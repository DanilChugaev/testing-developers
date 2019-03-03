<template lang="pug">
  login-form.pa-5.mt-5(
    :title='title'
    :type='type'
    :sending='sending'
    @submit='signup'
  )
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginView',

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
      console.log(user);
    },
  },
};
</script>

<style scoped>

</style>
