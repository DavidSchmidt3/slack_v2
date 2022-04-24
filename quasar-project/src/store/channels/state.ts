import { SerializedMessage, User } from 'src/contracts'

export interface ChannelsStateInterface {
  loading: boolean,
  error: Error | null,
  messages: { [channel: string]: SerializedMessage[] }
  active: string,
  messageIndex: { [channel: string]: number },
  messagesCount: { [channel: string]: number }
  channelUsers: { [channel: string]: User[] }
}

function state (): ChannelsStateInterface {
  return {
    loading: false,
    error: null,
    messages: {},
    active: '',
    messageIndex: {},
    messagesCount: {},
    channelUsers: {}
  }
}

export default state
