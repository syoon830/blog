<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute();
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>
<template>
  <main>
    <tags />
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <h2><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></h2>
      </div>
    </ContentList>
  </main>
</template>