<script setup lang="ts">
import { ref } from 'vue'
import { useStorage, CACHE_KEYS } from '~/hooks/use-storage'
import { MESSAGE_TYPES } from '~/constant'

defineProps<{ msg?: string }>()

const { cache } = useStorage()

function reloadRuntime() {
  chrome.runtime.reload()
}
</script>

<style scoped>
.container {
  width: 120px;
}
</style>

<template>
  <div class="container">
    <div>
      <button @click="reloadRuntime">RELOAD</button>
    </div>
    <div>
      <input checked type="checkbox" /> 灰了吗？
    </div>
  </div>
</template>
