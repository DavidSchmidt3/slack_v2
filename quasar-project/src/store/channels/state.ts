import { SerializedMessage } from 'src/contracts'

export interface ChannelsStateInterface {
  loading: boolean,
  error: Error | null,
  messages: { [channel: string]: SerializedMessage[] }
  active: string | null,
  messageIndex: number,
  messagesCount: number
}

function state (): ChannelsStateInterface {
  return {
    loading: false,
    error: null,
    messages: {},
    active: null,
    messageIndex: 0,
    messagesCount: 0
  }
}

export default state
