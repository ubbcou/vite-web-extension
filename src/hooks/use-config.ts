import { readonly, ref } from 'vue'
import { MESSAGE_TYPES } from '~/constant'

const config = ref({
  grayscale: {
    value: false,
    label: '置灰'
  },
})

export function useConfig() {
  async function updateProp(key: Config.PropKeys, value: any) {
    config.value[key].value = value
    
    chrome.runtime.sendMessage({ type: MESSAGE_TYPES.CONFIG_UPDATED, payload: config.value });
  }
  return {
    config: readonly(config),
    updateProp,
  }
}
