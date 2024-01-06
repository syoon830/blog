<script setup>
const { activeTag } = defineProps(['activeTag'])
const data = await queryContent('posts').where({tags: { $exists: true }}).find();
const tags = ref([]);
const tagsSet = new Set();

data.forEach(item => {
  item.tags.forEach(tag => {
    tagsSet.add(tag);
  });
});

tags.value = Array.from(tagsSet);
</script>
<template>
  <div class="max-w-4xl mx-auto mt-8 p-4">
    <div class="flex space-x-2">
      <span v-for="tag in tags">
        <NuxtLink :to="`/tags/${tag}`" class="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs [&.router-link-exact-active]:bg-blue-500 [&.router-link-exact-active]:text-white">{{ tag }}</NuxtLink>
      </span>
    </div>
  </div>
</template>