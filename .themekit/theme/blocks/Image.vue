<script setup lang="ts">
import type { DefaultTheme } from 'themekit-js/theme'
import { withBase } from 'themekit-js'

defineProps<{
  image: string
  alt?: string
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <template v-if="image">
    <img
      v-if="typeof image === 'string' || 'src' in image"
      class="VPImage"
      v-bind="typeof image === 'string' ? $attrs : { ...image, ...$attrs }"
      :src="withBase(typeof image === 'string' ? image : image.src)"
      :alt="alt ?? (typeof image === 'string' ? '' : image.alt || '')"
    />
    <template v-else>
      <VPImage
        class="dark"
        :image="image.dark"
        :alt="image.alt"
        v-bind="$attrs"
      />
      <VPImage
        class="light"
        :image="image.light"
        :alt="image.alt"
        v-bind="$attrs"
      />
    </template>
  </template>
</template>

<style scoped>
html:not(.dark) .VPImage.dark {
  display: none;
}
.dark .VPImage.light {
  display: none;
}
</style>
