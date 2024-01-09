<script setup lang="ts">
  import Callout_block from "~/components/notion/callout_block.vue";
  import Paragraph_block from "~/components/notion/paragraph_block.vue";
  import Heading_2_block from "~/components/notion/heading_2_block.vue";
  import Quote_block from "~/components/notion/quote_block.vue";
  import Heading_3_block from "~/components/notion/heading_3_block.vue";
  import Image_block from "~/components/notion/image_block.vue";
  import Code_block from "~/components/notion/code_block.vue";
  import Bulleted_list_item_block from "~/components/notion/bulleted_list_item_block.vue";

  definePageMeta({
    layout: 'post-view-layout'
  })
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
        <div style="max-width: 100%; padding-left: calc(0px + env(safe-area-inset-left)); width: 100%;">
          <div contenteditable="false" class="pseudoSelection" data-content-editable-void="true" style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;">
            <div class="notion-page-controls" style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-top: 80px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; pointer-events: auto;">
              <div role="button" tabindex="0" style="user-select: none; transition: opacity 100ms ease 0s; cursor: pointer; opacity: 0; display: inline-flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 28px; border-radius: 4px; font-size: 14px; line-height: 1.2; min-width: 0px; padding-left: 6px; padding-right: 8px; color: rgba(55, 53, 47, 0.5); pointer-events: none;">
                <svg role="graphics-symbol" viewBox="0 0 14 14" class="addPage" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-right: 6px;">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0c3.861 0 7 3.139 7 7s-3.139 7-7 7-7-3.139-7-7 3.139-7 7-7zM3.561 5.295a1.027 1.027 0 1 0 2.054 0 1.027 1.027 0 0 0-2.054 0zm5.557 1.027a1.027 1.027 0 1 1 0-2.054 1.027 1.027 0 0 1 0 2.054zm1.211 2.816a.77.77 0 0 0-.124-1.087.786.786 0 0 0-1.098.107c-.273.407-1.16.958-2.254.958-1.093 0-1.981-.55-2.244-.945a.788.788 0 0 0-1.107-.135.786.786 0 0 0-.126 1.101c.55.734 1.81 1.542 3.477 1.542 1.668 0 2.848-.755 3.476-1.541z"></path>
                </svg>
                Add icon
              </div>
              <div role="button" tabindex="0" style="user-select: none; transition: opacity 100ms ease 0s; cursor: pointer; opacity: 0; display: inline-flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 28px; border-radius: 4px; font-size: 14px; line-height: 1.2; min-width: 0px; padding-left: 6px; padding-right: 8px; color: rgba(55, 53, 47, 0.5); pointer-events: none;">
                <svg role="graphics-symbol" viewBox="0 0 14 14" class="addPageCover" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-right: 6px;">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"></path>
                </svg>
                Add cover
              </div>
            </div>
          </div>
          <div style="padding-right: calc(0px + env(safe-area-inset-right));">
            <div>
              <div data-block-id="2ec0ac22-63a3-4ee2-803a-1b753ef147f4" class="notion-selectable notion-page-block" style="color: rgb(55, 53, 47); font-weight: 700; line-height: 1.2; font-size: 40px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; cursor: text; display: flex; align-items: center;">
                <h1 class="notranslate" spellcheck="true" placeholder="Untitled" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-size: 1em; font-weight: inherit; margin: 0px;">
                  <span style="text-decoration:none;color:inherit" data-token-index="0" class="notion-enable-hover">비동기와 Promise, 그리고 async/await</span>
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
            <svg data-v-88374534="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-kt-ice-white dark:text-text-kt-dark inline">
              <path data-v-88374534="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
            {{ tag }}
          </a>
        </p>
      </div>
      <template v-for="child in doc.body.children">
<!--        <p>tag: {{ child.tag }}</p>-->
        <heading_2_block
          v-if="child.tag === 'h2'"
          :child="child"
        />
        <heading_3_block
            v-if="child.tag === 'h3'"
            :child="child"
        />
        <paragraph_block
          v-if="child.tag === 'p'"
          :child="child"
        />
        <callout_block
          v-if="child.tag === 'aside'"
          :child="child"
        />
        <quote_block
            v-if="child.tag === 'blockquote'"
            :child="child"
        />
        <image_block
          v-if="child.tag ==='img'"
          :child="child"
        />
        <code_block
          v-if="child.tag === 'pre'"
          :child="child"
        />
        <bulleted_list_item_block
          v-if="child.tag === 'ul'"
          :child="child"
        />
      </template>
    </article>
  </ContentDoc>
  <Utterances />
</template>

<style scoped>

</style>