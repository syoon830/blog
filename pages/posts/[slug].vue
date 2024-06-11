<script setup lang="ts">
import Callout_block from "~/components/notion/callout_block.vue";
import Paragraph_block from "~/components/notion/paragraph_block.vue";
import Heading_1_block from "~/components/notion/heading_1_block.vue";
import Heading_2_block from "~/components/notion/heading_2_block.vue";
import Quote_block from "~/components/notion/quote_block.vue";
import Heading_3_block from "~/components/notion/heading_3_block.vue";
import Image_block from "~/components/notion/image_block.vue";
import Code_block from "~/components/notion/code_block.vue";
import Bulleted_list_item_block from "~/components/notion/bulleted_list_item_block.vue";
import PostViewTitle from "~/components/PostViewTitle.vue";
import Divider_block from "~/components/notion/divider_block.vue";
import Numbered_list_item_block from "~/components/notion/numbered_list_item_block.vue";

definePageMeta({
  layout: "post-view-layout",
});
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <PostViewTitle :doc="doc" />
      <template v-for="child in doc.body.children">
        <!--        <p>tag: {{ child.tag }}</p>-->
        <heading_1_block v-if="child.tag === 'h1'" :child="child" />
        <heading_2_block v-if="child.tag === 'h2'" :child="child" />
        <heading_3_block v-if="child.tag === 'h3'" :child="child" />
        <paragraph_block v-if="child.tag === 'p'" :child="child" />
        <callout_block v-if="child.tag === 'aside'" :child="child" />
        <quote_block v-if="child.tag === 'blockquote'" :child="child" />
        <image_block v-if="child.tag === 'img'" :child="child" />
        <code_block v-if="child.tag === 'pre'" :child="child" />
        <bulleted_list_item_block v-if="child.tag === 'ul'" :child="child" />
        <numbered_list_item_block v-if="child.tag === 'ol'" :child="child" />
        <divider_block v-if="child.tag === 'hr'" />
        <!-- {{ child }} -->
      </template>
    </article>
  </ContentDoc>
  <!-- 모바일에서 댓글 안나오는 포스트도 있어서 아래 여백 줌 -->
  <div class="pb-4">
    <Utterances />
  </div>
</template>

<style scoped></style>
