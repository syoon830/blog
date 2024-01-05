<script setup lang="ts">
import type {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
const route = useRoute();
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }], limit: 5, skip: (route.params.id - 1) * 5 }
</script>

<template>
  <tags />
  <ContentList :query="query" v-slot="{ list }">
    <div v-for="post in list" :key="post._path">
      <h2><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></h2>
    </div>
  </ContentList>
  <pagination />
</template>

<style scoped>

</style>