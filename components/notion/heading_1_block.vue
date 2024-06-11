<script setup>
const { child } = defineProps(["child"]);
</script>
<template>
  <div style="width: 100%; max-width: 1278px; margin-top: 2em; margin-bottom: 4px;">
    <div style="display: flex; width: 100%; color: inherit; fill: inherit;">
      <h2 style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-weight: 600; font-size: 1.875em; line-height: 1.3; margin: 0px;">
        <template v-for="text in child.children">
          {{ text.value }}
        </template>
      </h2>
      <div style="position: relative; left: 0px;"></div>
    </div>
  </div>
</template>
