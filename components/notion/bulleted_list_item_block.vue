<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div v-for="li in child.children" class="notion-selectable notion-bulleted_list-block" style="width: 100%; max-width: 950px; margin-top: 1px; margin-bottom: 1px;">
    <div style="display: flex; align-items: flex-start; width: 100%; padding-left: 2px; color: inherit; fill: inherit;">
      <div contenteditable="false" class="pseudoselection" data-content-editable-void="true" data-text-edit-side="start" style="user-select: none; --pseudoselection--background: transparent; margin-right: 2px; width: 24px; display: flex; align-items: center; justify-content: center; flex-grow: 0; flex-shrink: 0; min-height: calc(1.5em + 6px);">
        <div class="pseudoBefore" style="font-size: 1.5em; line-height: 1; margin-bottom: 0px; --pseudobefore--fontfamily: arial; --pseudobefore--content: &quot;•&quot;;"></div>
      </div>
      <div style="flex: 1 1 0px; min-width: 1px; display: flex; flex-direction: column;">
        <div style="display: flex;">
          <div class="notranslate" spellcheck="true" placeholder="list" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; text-align: left;">
            <template v-for="text in li.children">
              {{ text.value }}
            </template>
          </div>
        </div>
        <div class="notion-selectable notion-bulleted_list-block"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pseudoBefore:before {
  font-family: Arial;
  content: "•";
}
</style>