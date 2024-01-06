<template>
  <Header />
  <div class="layout">
    <div class="layout-content">
      <Tags :active-tag="activeTag"/>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const activeTag = computed(() => {
  const route = useRoute();
  return route.params.tag;
})
</script>