<script setup lang="ts">
// props
const { child } = defineProps(['child']);
import { format } from "~/utils/mdToHtml";
</script>

<template>
  <div v-html="format(child)"></div>
</template>

<style scoped>
.pseudoBefore:before {
  font-family: Arial, serif;
  content: "•";
}
</style>