import { MESSAGE_TYPES } from '~/constant'

chrome.runtime.sendMessage({ type: MESSAGE_TYPES.CONTENT_LOADED });
