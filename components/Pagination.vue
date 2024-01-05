<script setup lang="ts">
const count = await queryContent('posts').count();

const totalPages = computed(() => {
  return Math.ceil(count / 5);
})
</script>

<template>
  <ul>
    <li v-for="page in totalPages">
      <NuxtLink :to="`/pagination/${page}`">{{ page }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>