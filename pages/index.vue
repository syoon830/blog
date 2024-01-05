<script setup lang="ts">
definePageMeta({
  layout: 'post-list'
})
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>
<template>
  <PostList :query="query" />
</template>