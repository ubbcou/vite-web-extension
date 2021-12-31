<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg?: string }>()

async function handleClick() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab)
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.body.style.filter = 'grayscale(1)'
      }
    });
  }
}
</script>

<template>
  <button @click="handleClick">I CAN GRAY</button>
</template>
