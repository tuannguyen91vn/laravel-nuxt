<template>
  <h1>Schedule {{ user.name }}!</h1>
</template>

<script>
export default {
  async asyncData({ app }) {
      const user = await app.$axios.$get('api/me');
      return { user };
  },
};
</script>
