import { Channel, SerializedMessage, User } from 'src/contracts'
import { MutationTree } from 'vuex'
import { ChannelsStateInterface } from './state'

const mutation: MutationTree<ChannelsStateInterface> = {
  LOADING_START (state) {
    state.loading = true
    state.error = null
  },
  LOADING_SUCCESS (state, { channel, messages }: { channel: Channel, messages: SerializedMessage[] }) {
    state.loading = false
    if (typeof (channel) === 'string') {
      state.messages[channel] = messages
      state.joined[channel] = channel
      if (state.invited.in === channel) {
        delete state.invited[channel]
      }
    } else {
      state.messages[channel.name] = messages
      state.joined[channel.name] = channel
      // delete channel from state invited
      if (state.invited[channel.name]) {
        delete state.invited[channel.name]
      }
    }
  },
  ADD_CHANNEL (state, { channel }: { channel: Channel }) {
    state.channels[channel.name] = channel
    state.messageIndex[channel.name] = 0
    state.messagesCount[channel.name] = 0
    state.channelUsers[channel.name] = []
  },
  LOADING_ERROR (state, error) {
    state.loading = false
    state.error = error
  },
  CLEAR_CHANNEL (state, channel) {
    state.active = ''
    delete state.messages[channel]
  },
  DELETE_CHANNEL (state, channel) {
    delete state.messages[channel]
    delete state.joined[channel]
    delete state.isOwner[channel]
    delete state.messageIndex[channel]
    delete state.messagesCount[channel]
    delete state.channelUsers[channel]
    delete state.channels[channel]
    delete state.typing[channel]
    delete state.invitations[channel]
    delete state.invited[channel]
  },
  SET_ACTIVE (state, channel: string) {
    state.active = channel
  },
  SET_MESSAGE_INDEX (state, { channel, index }: {channel: Channel, index: number}) {
    if (typeof (channel) === 'string') {
      state.messageIndex[channel] = index
    } else {
      state.messageIndex[channel.name] = index
    }
  },
  SET_IS_OWNER (state, { channel, isOwner }: { channel: Channel, isOwner: boolean }) {
    if (typeof (channel) === 'string') {
      state.isOwner[channel] = isOwner
    } else {
      state.isOwner[channel.name] = isOwner
    }
  },
  SET_CHANNEL_USERS (state, { channel, users }: { channel: string, users: User[] }) {
    state.channelUsers[channel] = users
  },
  SET_MESSAGES_COUNT (state, { channel, count }: { channel: Channel, count: number }) {
    state.messagesCount[channel.name] = count
  },
  NEW_MESSAGE (state, { channel, message, currentUser }: { channel: string, message: SerializedMessage, currentUser: number }) {
    state.messages[channel].push(message)
    if (message.author.id !== currentUser) {
      console.log('dostavaaam')
      state.notification = { channel, message: message.message, author: message.author.name }
      state.showNotification = true
    }
  },
  DISABLE_NOTIFICATION (state) {
    state.showNotification = false
  },
  // eslint-disable-next-line camelcase
  IS_TYPING (state, { channel, user, message_typing }: { channel: string, user: string, message_typing: string }) {
    state.typing[channel] = {
      user,
      // eslint-disable-next-line camelcase
      message_typing
    }
    // eslint-disable-next-line camelcase
  },
  SET_INVITED (state, channel: Channel) {
    state.invited[channel.name] = channel
    console.log(state)
  },
  ADD_CHANNEL_TO_JOINED (state, channel: Channel) {
    state.joined[channel.name] = channel
  },
  SET_ALL_CHANNELS (state, { channels } : { channels: Channel[]}) {
    state.allChannels = channels
  }
}

export default mutation
