import { MESSAGE_TYPES } from '~/constant'

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse('ok')
    if (request.type === MESSAGE_TYPES.CHANGE_MY_CONTENT_GRAY) {
      console.log(sender?.tab?.id, sender)
      if (sender?.tab?.id) {
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id, },
          args: [],
          func: () => {
            // sender.tab?.windowId
            document.body.style.filter = 'grayscale(100%)'
            console.log(document)
          }
        })
      }
    }
  }
)
