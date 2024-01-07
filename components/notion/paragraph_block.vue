<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div class="notion-selectable notion-text-block" style="width: 100%; margin-top: 2px; margin-bottom: 1px;">
    <div style="color: inherit; fill: inherit;">
      <div style="display: flex;">
        <div class="notranslate" spellcheck="true" placeholder=" " style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px;">
          <template v-for="text in child.children">
            <span v-if="text.tag === 'code'" style="font-family:&quot;SFMono-Regular&quot;, Menlo, Consolas, &quot;PT Mono&quot;, &quot;Liberation Mono&quot;, Courier, monospace;line-height:normal;background:rgba(135,131,120,.15);color:#EB5757;border-radius:4px;font-size:85%;padding:0.2em 0.4em" data-token-index="1" spellcheck="false" class="notion-enable-hover">
              <template v-for="code in text.children">
                {{ code.value }}
              </template>
            </span>
            <template v-else-if="text.tag === 'a'">
              <template v-for="a in text.children">
                <NuxtLink :to="text.props.href" style="cursor:pointer;color:inherit;word-wrap:break-word;text-decoration:inherit">
                  <span style="border-bottom:0.05em solid;border-color:rgba(55,53,47,.4);opacity:0.7">{{ a.value }}</span>
                </NuxtLink>
              </template>
            </template>
            <template v-else>{{ text.value }}</template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>