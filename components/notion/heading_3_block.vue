<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div data-block-id="82875857-26b6-4e33-981d-ab63791cf236" class="notion-selectable notion-sub_sub_header-block" style="width: 100%; max-width: 1238px; margin-top: 1em; margin-bottom: 1px;">
    <div style="display: flex; width: 100%; color: inherit; fill: inherit;">
      <h4 class="notranslate" spellcheck="true" placeholder="제목3" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-weight: 600; font-size: 1.25em; line-height: 1.3; margin: 0px;">
        <template v-for="text in child.children">
          {{ text.value }}
        </template>
      </h4>
    </div>
  </div>
</template>

<style scoped>

</style>