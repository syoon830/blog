<script setup lang="ts">
definePageMeta({
  layout: 'post-list'
})
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute();
const query: QueryBuilderParams = { path: '/posts', where: [{ 'tags': { $in: route.params.tag }, }], sort: [{ date: -1 }] }
</script>

<template>
  <PostList :query="query" />
</template>

<style scoped>

</style>