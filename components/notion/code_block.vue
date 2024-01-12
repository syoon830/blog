<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'

const { child } = defineProps(['child']);
const language_class = child.props.className;
const code = child.props.code;
onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div style="width: 100%; margin-top: 4px; margin-bottom: 4px;">
    <div style="flex-grow: 1; flex-shrink: 1; text-align: left; font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace; font-size: 85%; tab-size: 2; min-height: 1em; color: rgb(55, 53, 47); white-space: pre-wrap; word-break: break-all; min-width: 0px;">
      <pre><code :class="language_class">{{ code }}</code></pre>
    </div>
<!--
    <div style="display: flex;">
      <div contenteditable="false" data-content-editable-void="true" role="figure" aria-labelledby="id_n" style="flex-grow: 1; border-radius: 4px; text-align: left; position: relative; min-width: 0px; width: 100%;">
        <div>
          <div class="line-numbers notion-code-block" style="display: flex;">

          </div>
        </div>
        <div style="background: white; padding-right: 105px;"></div>
      </div>&ZeroWidthSpace;
    </div>
-->
  </div>

<!--
  <div style="width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;">
    <div style="display: flex;">
      <div style="flex-grow: 1;
        border-radius: 4px;
        text-align: left;
        position: relative;
        background: rgb(247, 246, 243);
        min-width: 0px;
        width: 100%;">
        <div>
          <div style="flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
          font-size: 85%;
          tab-size: 2;
          padding: 34px 16px 32px 32px;
          min-height: 1em;
          color: rgb(55, 53, 47);
          white-space: pre-wrap;
          word-break: break-all;
          min-width: 0px;">
            <template v-for="text in props.richText">
              {{ text.plain_text }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>-->
</template>

<style scoped>

</style>