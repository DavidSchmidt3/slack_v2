import { Channel, SerializedMessage, User } from 'src/contracts'

export interface ChannelsStateInterface {
  loading: boolean,
  error: Error | null,
  messages: { [channel: string]: SerializedMessage[] }
  active: string,
  isOwner: { [channel: string]: boolean },
  messageIndex: { [channel: string]: number },
  messagesCount: { [channel: string]: number },
  channelUsers: { [channel: string]: User[] },
  channels: { [channel: string]: Channel },
  invited: { [channel: string]: Channel},
  joined: { [channel: string]: Channel},
  typing: { [channel: string]: {message_typing:string, user: string} }
  invitations: { [channel: string]: Channel },
  allChannels: Channel[],
  notification: { message: string, channel: string, author: string },
  showNotification: boolean
}

function state (): ChannelsStateInterface {
  return {
    loading: false,
    error: null,
    messages: {},
    active: '',
    isOwner: {},
    messageIndex: {},
    messagesCount: {},
    channelUsers: {},
    channels: {},
    typing: {},
    invitations: {},
    invited: {},
    joined: {},
    notification: { message: '', channel: '', author: '' },
    allChannels: [],
    showNotification: false
  }
}

export default state
