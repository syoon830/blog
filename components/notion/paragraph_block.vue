<script setup lang="ts">
const { child: mdToElementShape } = defineProps(['child']);
import { format } from "~/utils/mdToHtml";
</script>

<template>
  <div style="width: 100%; margin-top: 2px; margin-bottom: 1px;">
    <div style="color: inherit; fill: inherit;">
      <div style="display: flex;">
        <div style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px;">
          <span v-html="format(child)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>