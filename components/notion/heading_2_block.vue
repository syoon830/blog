<script setup>
const { child } = defineProps(['child']);
</script>
<template>
 <div class="notion-selectable notion-sub_header-block" style="width: 100%; max-width: 950px; margin-top: 1.4em; margin-bottom: 1px;">
   <div style="display: flex; width: 100%; color: inherit; fill: inherit;">
     <h3 class="notranslate" spellcheck="true" placeholder="Heading 2" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-weight: 600; font-size: 1.5em; line-height: 1.3; margin: 0px;">
       <span style="font-weight:600" data-token-index="0" class="notion-enable-hover">
          <template v-for="text in child.children">
              {{ text.value }}
          </template>
       </span>
     </h3>
   </div>
 </div>
</template>
