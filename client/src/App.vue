<template lang="pug">
    v-app
        v-toolbar(app)
            v-toolbar-title
                Logo

            v-spacer

            v-btn
                span.mr-2 Enter
                login-icon

        v-content
            router-view

        v-footer.pa-3(app height='auto')
            v-spacer
            div &copy; {{ new Date().getFullYear() }}
            a(
              href='https://github.com/DanilChugaev/testing-developers'
              target='_blank'
            ) GitHub
</template>

<script>
import LoginIcon from 'vue-material-design-icons/Login.vue';
import Logo from './components/Logo/Logo.vue';

export default {
  name: 'App',

  components: {
    LoginIcon,
    Logo,
  },

  data() {
    return {
      //
    };
  },
};
</script>
