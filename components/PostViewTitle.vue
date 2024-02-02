<script setup lang="ts">
const { doc: { date: string } } = defineProps(['doc']);

const formattedDate = (date: string) => {
  const dateTime = new Date(date);
  return dateTime.toISOString().split('T')[0];
}
</script>

<template>
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
    <div style="max-width: 100%; padding-left: calc(0px + env(safe-area-inset-left)); width: 100%;">
      <div style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;">
        <div style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-top: 40px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; pointer-events: auto;"></div>
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
  <div class="layout-content-with-divider">
    <div style="font-size: 14px; color: rgba(55, 53, 47, 0.65);">
      <div style="padding: 8px 0px;">
        <div style="padding-top: 8px;">
          <div style="padding-bottom: 8px;">
            <div class="flex items-center gap-3 p-2">
              <span>Tags:</span>
              <div class="flex flex-wrap gap-2">
                <NuxtLink v-for="tag in doc.tags" :to="`/tags/${tag}`" class="text-sm flex items-center p-1 px-2 rounded-md truncate text-white bg-blue-500">
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>
            <div class="flex items-center gap-3 p-2">
              <span>Date:</span>
              <span class="text-black">{{ formattedDate(doc.date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-content-with-divider {
  border-bottom: 1px solid rgba(55,53,47,.09);
  margin-bottom: 8px
}
</style>