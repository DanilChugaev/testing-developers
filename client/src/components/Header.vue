<template lang="pug">
    v-toolbar(app)
        v-toolbar-title
            router-link(
              to="/"
            )
                Logo

        v-spacer

        v-btn.mr-3(
          to="/login"
          text
        )
            span.mr-2 Login
            login-icon

        v-btn(
          to="/signup"
          text
        )
            span.mr-2 Sign up
            sign-in-icon
</template>

<script>
import LoginIcon from 'vue-material-design-icons/Login.vue';
import SignInIcon from 'vue-material-design-icons/AccountPlusOutline.vue';

import Logo from '@/components/Logo/Logo.vue';

export default {
  name: 'Header',

  components: {
    LoginIcon,
    SignInIcon,
    Logo,
  },
};
</script>

<style scoped>

</style>
