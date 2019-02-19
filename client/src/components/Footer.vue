<template lang="pug">
    v-footer.pa-3(app height='auto')
        v-spacer
        div.mr-2 &copy; {{ new Date().getFullYear() }}
        a(
          href='https://github.com/DanilChugaev/testing-developers'
          target='_blank'
        ) GitHub
</template>

<script>
export default {
  name: 'Footer',
};
</script>
