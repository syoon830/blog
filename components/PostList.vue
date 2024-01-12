<script setup lang="ts">
const { query } = defineProps(['query']);

const formattedDate = (date: string) => {
  const dateTime = new Date(date);
  return dateTime.toISOString().split('T')[0];
}
</script>

<template>
  <div class="container mx-auto p-4">
  </div>
  <ContentList :query="query" v-slot="{ list }">
    <ul class="list-none">
      <li class="border-b border-gray-200 py-2" v-for="post in list">
        <div class="flex justify-between flex-col md:flex-row">
          <span class="font-semibold"><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></span>
          <span class="text-gray-600 font-light">{{ formattedDate(post.date) }}</span>
        </div>
      </li>
    </ul>
  </ContentList>
  <!-- 현재는 안쓰고 나중에 데이터 많이지면 고민
    <pagination />
   -->
</template>

<style scoped>

</style>