import { MESSAGE_TYPES } from '~/constant'

chrome.runtime.sendMessage({ type: MESSAGE_TYPES.CHANGE_MY_CONTENT_GRAY }, (response) => {
  console.log('content has response: ', response)
});
