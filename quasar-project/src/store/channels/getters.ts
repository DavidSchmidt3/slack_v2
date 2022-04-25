import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ChannelsStateInterface } from './state'

const getters: GetterTree<ChannelsStateInterface, StateInterface> = {
  joinedChannels (context) {
    console.log(context)
    return Object.keys(context.messages)
  },

  channels (context) {
    return context.channels
  },
  currentMessages (context) {
    return context.active !== null ? context.messages[context.active] : []
  },
  typingMessage (context) {
    console.log(context)
    return context.typing[context.active] || ' '
  },
  typingUser (context) {
    console.log(context)
    return context.typing[context.active] || ' '
  },
  lastMessageOf (context) {
    return (channel: string) => {
      const messages = context.messages[channel]
      return messages?.length > 0 ? messages[messages.length - 1] : null
    }
  }
}

export default getters
