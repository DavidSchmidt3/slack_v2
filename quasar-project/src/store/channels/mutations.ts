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
    } else {
      if (channel) {
        state.messages[channel.name] = messages
        state.channels[channel.name] = channel
      }
    }
  },
  SET_INVITED_CHANNEL (state, { channel }: { channel: Channel }) {
    console.log(channel)
    state.invitedChannels[channel.name] = channel
  },
  SET_JOINED_CHANNEL (state, { channel }: { channel: Channel }) {
    console.log(channel)
    state.joinedChannels[channel.name] = channel
  },
  LOADING_ERROR (state, error) {
    state.loading = false
    state.error = error
  },
  CLEAR_CHANNEL (state, channel) {
    state.active = ''
    delete state.messages[channel]
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
  SET_CHANNEL_USERS (state, { channel, users }: { channel: string, users: User[] }) {
    state.channelUsers[channel] = users
  },
  SET_MESSAGES_COUNT (state, { channel, count }: { channel: Channel, count: number }) {
    state.messagesCount[channel.name] = count
  },
  NEW_MESSAGE (state, { channel, message }: { channel: string, message: SerializedMessage }) {
    state.messages[channel].push(message)
  },
  // eslint-disable-next-line camelcase
  IS_TYPING (state, { channel, user, message_typing }: { channel: string, user: string, message_typing: string }) {
    state.typing[channel] = {
      user,
      // eslint-disable-next-line camelcase
      message_typing
    }
  },
  joinchannel (state, { channel }: { channel: Channel }) {
    console.log('JEBAT')
    state.joinedChannels[channel.name] = channel
  }
}

export default mutation
