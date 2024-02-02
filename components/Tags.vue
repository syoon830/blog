<script setup>
const { activeTag } = defineProps(['activeTag'])
const data = await queryContent('posts').where({tags: { $exists: true }}).find();
const tags = ref([]);
const tagsSet = new Set();
const tagsMap = new Map();

tagsMap.set('All', data.length);
data.forEach(item => {
  item.tags.forEach(tag => {
    tagsMap.set(tag, tagsMap.has(tag) ? tagsMap.get(tag) + 1 : 1)
    // tagsSet.add(tag);
  });
});
// console.log(tagsMap);
tags.value = Array.from(tagsMap);
</script>
<template>
  <div class="max-w-4xl mx-auto mt-8 pb-4">
    <div class="flex flex-wrap gap-2">
      <span v-for="tag in tags">
        <NuxtLink :to="tag[0] === 'All' ? '/' :`/tags/${tag[0]}`" class="text-sm flex items-center bg-blue-300 p-1 px-2 rounded-md truncate text-white [&.router-link-exact-active]:bg-blue-500 [&.router-link-exact-active]:text-white">{{ tag[0] }} ({{ tag[1] }})</NuxtLink>
      </span>
    </div>
  </div>
</template>