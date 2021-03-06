import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ChannelsStateInterface } from './state'

const getters: GetterTree<ChannelsStateInterface, StateInterface> = {
  joinedChannels (context) {
    return Object.keys(context.messages)
  },

  channels (context) {
    return context.invited
  },

  invited (context) {
    return context.invited
  },

  joined (context) {
    return context.joined
  },

  isOwner (context) {
    return context.isOwner[context.active]
  },

  getNotification (context) {
    return context.notification
  },

  showNotification (context) {
    return context.showNotification
  },

  currentMessages (context) {
    return context.active !== null ? context.messages[context.active] : []
  },

  typingMessage (context) {
    return context.typing[context.active] || ' '
  },

  typingUser (context) {
    return context.typing[context.active] || ' '
  },

  allChannels (context) {
    return context.allChannels
  },

  lastMessageOf (context) {
    return (channel: string) => {
      const messages = context.messages[channel]
      return messages?.length > 0 ? messages[messages.length - 1] : null
    }
  }
}

export default getters
