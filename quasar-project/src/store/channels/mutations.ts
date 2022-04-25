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
    state.messages[channel.name] = messages
    state.channels[channel.name] = channel
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
  SET_MESSAGE_INDEX (state, { channel, index }: {channel: string, index: number}) {
    state.messageIndex[channel] = index
  },
  SET_CHANNEL_USERS (state, { channel, users }: { channel: string, users: User[] }) {
    state.channelUsers[channel] = users
  },
  SET_MESSAGES_COUNT (state, { channel, count }: { channel: string, count: number }) {
    state.messagesCount[channel] = count
  },
  NEW_MESSAGE (state, { channel, message }: { channel: string, message: SerializedMessage }) {
    state.messages[channel].push(message)
  }
}

export default mutation
