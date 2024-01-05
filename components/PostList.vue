<script setup lang="ts">
const props = defineProps('query')
</script>

<template>
  <ContentList :query="props.query" v-slot="{ list }">
    <div v-for="post in list" :key="post._path">
      <h2><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></h2>
    </div>
  </ContentList>
  <!-- 현재는 안쓰고 나중에 데이터 많이지면 고민
    <pagination />
   -->
</template>

<style scoped>

</style>