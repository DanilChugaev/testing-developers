<template lang="pug">
  login-form.pa-5.mt-5(
    :title='title'
    :type='type'
    :sending='sending'
    @submit='login'
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
      title: 'Authorization',
      type: 'Log in',
      sending: false, // for form preloader on submit button
    };
  },

  methods: {
    async login(user) {
      console.log(user);
    },
  },
};
</script>

<style scoped>

</style>
