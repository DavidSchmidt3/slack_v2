import { Channel, SerializedMessage, User } from 'src/contracts'

export interface ChannelsStateInterface {
  [x: string]: unknown
  loading: boolean,
  error: Error | null,
  messages: { [channel: string]: SerializedMessage[] }
  active: string,
  messageIndex: { [channel: string]: number },
  messagesCount: { [channel: string]: number },
  channelUsers: { [channel: string]: User[] },
  channels: { [channel: string]: Channel },
  invitedChannels: { [channel: string]: Channel },
  joinedChannels: { [channel: string]: Channel },
  typing: { [channel: string]: {message_typing:string, user: string} }
}

function state (): ChannelsStateInterface {
  return {
    joinedChannels: {},
    loading: false,
    error: null,
    messages: {},
    active: '',
    messageIndex: {},
    messagesCount: {},
    channelUsers: {},
    channels: {},
    invitedChannels: {},
    typing: {}
  }
}

export default state
