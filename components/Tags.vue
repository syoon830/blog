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
  <div class="max-w-4xl mx-auto mt-8 pb-4">
    <div class="flex">
      <span v-for="tag in tags">
        <NuxtLink :to="`/tags/${tag}`" class="text-sm flex items-center bg-blue-300 p-0 px-2 rounded-md mr-2 truncate text-white [&.router-link-exact-active]:bg-blue-500 [&.router-link-exact-active]:text-white">{{ tag }}</NuxtLink>
      </span>
    </div>
  </div>
</template>