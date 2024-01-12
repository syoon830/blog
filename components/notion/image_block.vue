<script setup lang="ts">
const { child } = defineProps(['child']);
</script>

<template>
  <div style="width: 100%; align-self: center; margin-top: 4px; margin-bottom: 4px;">
    <div>
      <div style="display: flex;">
        <div style="position: relative; overflow: hidden; flex-grow: 1; padding-right: 10px;">
          <div style="position: relative; cursor: pointer;"><div>
            <div style="height: 100%; width: 100%;">
              <img loading="lazy" :src="child.props.src" referrerpolicy="same-origin" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto;">
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>