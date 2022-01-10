import { MESSAGE_TYPES } from '~/constant'
import { useConfig } from '~/hooks/use-config'
const { config, updateProp } = useConfig()

chrome.runtime.onStartup.addListener(() => {
  iterate()
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('background', request)
    if (request.type === MESSAGE_TYPES.GET_CONFIG) {
      sendResponse(config.value)
    }
    if (request.type === MESSAGE_TYPES.UPDATE_CONFIG) {
      updateProp(request.payload.key, request.payload.value)
      iterate()
    }
    if (request.type === MESSAGE_TYPES.CONTENT_LOADED) {
      iterate()
    }
  }
)

function iterate() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        doGrayscale(tab.id, config.value.grayscale.value)
      }
    })
  })
}

function doGrayscale(tabId: number, open: boolean) {
  chrome.scripting.executeScript({
    target: { tabId },
    args: [open],
    func: (open) => {
      document.body.style.filter = open ? 'grayscale(100%)' : 'grayscale(0)'
    }
  })
}
