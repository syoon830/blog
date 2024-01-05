<script setup>
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
    <ul>
      <li v-for="tag in tags">
          <NuxtLink :to="`/tags/${tag}`">{{ tag }}</NuxtLink>
      </li>
    </ul>
</template>