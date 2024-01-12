<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div style="width: 100%; margin-top: 1em; margin-bottom: 1px;">
    <div style="display: flex; width: 100%; color: inherit; fill: inherit;">
      <h4 style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 600; font-size: 1.25em; line-height: 1.3; margin: 0px;">
        <template v-for="text in child.children">
          {{ text.value }}
        </template>
      </h4>
    </div>
  </div>
</template>

<style scoped>

</style>