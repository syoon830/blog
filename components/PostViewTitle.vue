<script setup lang="ts">
const { doc } = defineProps(['doc']);
</script>

<template>
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
    <div style="max-width: 100%; padding-left: calc(0px + env(safe-area-inset-left)); width: 100%;">
      <div style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;">
        <div style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-top: 80px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; pointer-events: auto;"></div>
      </div>
      <div style="padding-right: calc(0px + env(safe-area-inset-right));">
        <div>
          <div style="color: rgb(55, 53, 47); font-weight: 700; line-height: 1.2; font-size: 40px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; cursor: text; display: flex; align-items: center;">
            <h1 style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-size: 1em; font-weight: inherit; margin: 0px;">
              <span style="text-decoration:none;color:inherit">{{ doc.title }}</span>
            </h1>
          </div>
          <div style="margin-left: 4px;"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-2 pb-6">
    <p>
      Tags:
      <a v-for="tag in doc.tags" :href="`/blog/tags/${tag}`" class="bg-blue-500 p-0 py-1 px-2 rounded-md mr-2 truncate ui-tag text-white">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-kt-ice-white dark:text-text-kt-dark inline">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        {{ tag }}
      </a>
    </p>
  </div>
</template>

<style scoped>

</style>