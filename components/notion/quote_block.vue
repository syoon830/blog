<script setup lang="ts">
const { child } = defineProps(['child']);
import { format } from "~/utils/mdToHtml";
</script>

<template>
  <div style="width: 100%; margin-top: 4px; margin-bottom: 4px;">
    <blockquote style="margin: 0px; font-size: 1em; padding: 3px 2px; color: inherit; fill: inherit; display: flex;">
      <div style="border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;">
        <div style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding-left: 2px; padding-right: 2px;">
          <span v-html="format(child)"></span>
        </div>
        <div></div>
      </div>
    </blockquote>
  </div>
</template>

<style scoped>

</style>