<template lang="pug">
    v-footer.pa-3(app height='auto')
        div.mr-2 &copy; {{ new Date().getFullYear() }}

        v-spacer

        a(
          href='https://github.com/DanilChugaev/testing-developers'
          target='_blank'
        )
            github-icon.icon
</template>

<script>
import GithubIcon from 'vue-material-design-icons/GithubFace.vue';

export default {
  name: 'Footer',

  components: {
    GithubIcon,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  color: black;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}
</style>
