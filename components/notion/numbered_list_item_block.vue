<script setup lang="ts">
// props
const { child } = defineProps(['child']);
import { format } from "~/utils/mdToHtml";
</script>

<template>
  <div v-html="format(child)"></div>
</template>

<style>
ol {
  margin-left: 10px;
}
ol li {

}
</style>