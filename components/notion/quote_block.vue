<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div data-block-id="ef838c05-640d-49cd-afd7-6427fb173a14" class="notion-selectable notion-quote-block" style="width: 100%; max-width: 1238px; margin-top: 4px; margin-bottom: 4px;">
    <blockquote style="margin: 0px; font-size: 1em; padding: 3px 2px; color: inherit; fill: inherit; display: flex;">
      <div style="border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;">
        <div class="notranslate" spellcheck="true" placeholder="AI 기능은 '스페이스 키', 명령어는 '/' 입력" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding-left: 2px; padding-right: 2px;">
          <template v-for="quotes in child.children">
            <template v-for="text in quotes.children">
              {{ text.value }}
            </template>
          </template>
        </div>
        <div data-block-id="ef838c05-640d-49cd-afd7-6427fb173a14" class="notion-selectable notion-quote-block"></div>
      </div>
    </blockquote>
  </div>
</template>

<style scoped>

</style>