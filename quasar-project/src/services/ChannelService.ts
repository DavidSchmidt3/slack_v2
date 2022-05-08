/* eslint-disable camelcase */
import { RawMessage, SerializedMessage } from 'src/contracts'
import { BootParams, SocketManager } from './SocketManager'
import { api } from 'src/boot/axios'
import type { Channel, User } from 'src/contracts'

// creating instance of this class automatically connects to given socket.io namespace
// subscribe is called with boot params, so you can use it to dispatch actions for socket events
// you have access to socket.io socket using this.socket
class ChannelSocketManager extends SocketManager {
  public subscribe ({ store }: BootParams): void {
    const channel = this.namespace.split('/').pop() as string

    this.socket.on('message', (message: SerializedMessage) => {
      store.commit('channels/NEW_MESSAGE', { channel, message })
    })
    // eslint-disable-next-line camelcase
    this.socket.on('typing', (user: string, message_typing: string) => {
      store.commit('channels/IS_TYPING', { channel, user, message_typing })
    })
    this.socket.on('invite_channel', (channel: Channel, user: string) => {
      store.commit('channels/NEW_INVITATION', { channel, user })
    })
  }

  public addMessage (message: RawMessage): Promise<SerializedMessage> {
    return this.emitAsync('addMessage', message)
  }

  public isTyping (message: RawMessage, user: string): Promise<SerializedMessage> {
    return this.emitAsync('typing', message, user)
  }

  public invitation (channel: Channel, user: User): Promise<Channel> {
    return this.emitAsync('invite_channel', channel, user.name)
  }

  public loadAllMessages (): Promise<SerializedMessage[]> {
    return this.emitAsync('loadAllMessages')
  }

  public loadSomeMessages (startIndex: number, endIndex: number): Promise<SerializedMessage[]> {
    return this.emitAsync('loadSomeMessages', startIndex, endIndex)
  }

  public getMessagesCount (): Promise<number> {
    return this.emitAsync('getMessagesCount')
  }
}

class ChannelService {
  private channels: Map<string, ChannelSocketManager> = new Map()

  public join (name: string): ChannelSocketManager {
    if (this.channels.has(name)) {
      throw new Error(`User is already joined in channel "${name}"`)
    }
    // connect to given channel namespace

    const channel = new ChannelSocketManager(`/channels/${name}`)
    this.channels.set(name, channel)
    return channel
  }

  public async create (name: string, type: boolean): Promise<Channel> {
    let typ = ''
    if (type === true) {
      typ = 'private'
    } else {
      typ = 'public'
    }

    const data = {
      channel: name,
      type: typ
    }
    const datas = await api.post<Channel>('/channels', data)
    const new_channel = datas.data
    const channel = new ChannelSocketManager(`/channels/${name}`)
    this.channels.set(name, channel)
    return new_channel
  }

  public getChannel (name: string): ChannelSocketManager | undefined {
    return this.channels.get(name)
  }

  public async isOwner (name: string): Promise<boolean> {
    const data = await api.get<boolean>('/channels/getOwner', { params: { channel: name } })
    return data.data
  }

  public async leaveOrDelete (name: string, userId: number): Promise<void> {
    const channel = this.channels.get(name)
    if (!channel) {
      return
    }

    await api.post<Channel>('/channels/leaveOrDelete', { channel: name, userId })

    channel.destroy()
    this.channels.delete(name)
  }

  public async leavePermanent (name: string, userId: number): Promise<void> {
    const channel = this.channels.get(name)
    if (!channel) {
      return
    }

    await api.post<Channel>('/channels/leave', { channel: name, userId })

    channel.destroy()
    this.channels.delete(name)
  }

  public async delete (name: string, userId: number): Promise<void> {
    const channel = this.channels.get(name)
    if (!channel) {
      return
    }

    await api.post<Channel>('/channels/delete', { channel: name, userId })

    channel.destroy()
    this.channels.delete(name)
  }

  public async getChannelUsers (name: string): Promise<User[]> {
    const channelUsers = await api.get<User[]>('/channels/getChannelUsers', { params: { channel: name } })
    return channelUsers.data
  }

  public async getJoinedChannels (): Promise<Channel[]> {
    const channels = await api.get<Channel[]>('/channels/getJoinedChannels')
    return channels.data
  }

  public async getInvitedChannels (): Promise<Channel[]> {
    const channels = await api.get<Channel[]>('/channels/getInvitedChannels')
    return channels.data
  }

  public async inviteUser (channel: string, user: string): Promise<void> {
    await api.post<string>('/channels/inviteUser', { channel, userName: user })
  }

  public async revokeUser (channel: string, user: string): Promise<void> {
    await api.post<string>('/channels/revokeUser', { channel, userName: user })
  }

  public async getAllChannels (): Promise<Channel[]> {
    const channels = await api.get<Channel[]>('/channels/getAllChannels')
    return channels.data
  }

  public leave (name: string): boolean {
    const channel = this.channels.get(name)

    if (!channel) {
      return false
    }

    // disconnect namespace and remove references to socket
    channel.destroy()
    return this.channels.delete(name)
  }

  public async addUser (channel: string, user: string): Promise<void> {
    await api.post<string>('/channels/add', { channel, userEmail: user })
  }

  public async voteKick (channel: string, user: string): Promise<void> {
    await api.post<string>('/channels/voteKick', { channel, userName: user })
  }

  public async addUserDirectly (channel: string, user: string): Promise<Channel> {
    const response = await api.post<Channel>('/channels/addUserDirectly', { channel, userEmail: user })
    return response.data
  }

  public async addUserDirectlyByNick (channel: string, user: string): Promise<Channel> {
    const response = await api.post<Channel>('/channels/addUserDirectlyByNick', { channel, userNick: user })
    return response.data
  }

  public async acceptInvite (channel: Channel): Promise<void> {
    await api.post<string>('/channels/acceptInvite', { channel })
  }

  public in (name: string): ChannelSocketManager | undefined {
    return this.channels.get(name)
  }
}

export default new ChannelService()
