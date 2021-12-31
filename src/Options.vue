<script lang="ts" setup>
import { createApp, h, watch } from 'vue'
import { useStorage, CACHE_KEYS } from '~/hooks/use-storage'

const { cache, setItem } = useStorage()
watch(cache, (val) => {
  console.log(val)
})
</script>

<template>
  <div>
    <button @click="() => setItem(CACHE_KEYS.GRAY_LIST, [Date.now()])">Hello</button>
    <pre>{{ cache }}</pre>
  </div>
</template>
