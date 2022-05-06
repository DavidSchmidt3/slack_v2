import { Channel, SerializedMessage, User } from 'src/contracts'

export interface ChannelsStateInterface {
  loading: boolean,
  error: Error | null,
  messages: { [channel: string]: SerializedMessage[] }
  active: string,
  messageIndex: { [channel: string]: number },
  messagesCount: { [channel: string]: number },
  channelUsers: { [channel: string]: User[] },
  channels: { [channel: string]: Channel },
  invited: { [channel: string]: Channel},
  joined: { [channel: string]: Channel},
  typing: { [channel: string]: {message_typing:string, user: string} }
  invitations: { [channel: string]: Channel }
}

function state (): ChannelsStateInterface {
  return {
    loading: false,
    error: null,
    messages: {},
    active: '',
    messageIndex: {},
    messagesCount: {},
    channelUsers: {},
    channels: {},
    typing: {},
    invitations: {},
    invited: {},
    joined: {}
  }
}

export default state
