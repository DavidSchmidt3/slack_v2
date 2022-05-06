/* eslint-disable camelcase */
import { BootParams, SocketManager } from './SocketManager'
import type { Channel } from 'src/contracts'
import { api } from 'src/boot/axios'
import { AxiosError } from 'axios'

// creating instance of this class automatically connects to given socket.io namespace
// subscribe is called with boot params, so you can use it to dispatch actions for socket events
// you have access to socket.io socket using this.socket
class UserSocketManager extends SocketManager {
  public subscribe ({ store }: BootParams): void {
    const user = this.namespace.split('/').pop() as string
    this.socket.on('invite_channel', (channel: Channel) => {
      store.commit('user/NEW_INVITATION', { channel, user })
    })
  }

  public invitation (channel: Channel): Promise<Channel> {
    console.log(this.socket)
    this.socket.emit('invite_channel', { channel })
    return this.emitAsync('invite_channel', channel)
  }
}

class UserService {
  private users: Map<string, UserSocketManager> = new Map()

  public join (name: string): UserSocketManager {
    if (this.users.has(name)) {
      throw new Error(`User is already joined in channel "${name}"`)
    }
    // connect to given channel namespace
    const user = new UserSocketManager(`/users/${name}`)
    user.socket.connect()
    this.users.set(name, user)
    return user
  }

  public getInvitedChannels (): Promise<Channel | null> {
    return api.get(
      'auth/me')
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          return null
        }

        return Promise.reject(error)
      })
  }

  public in (name: string): UserSocketManager | undefined {
    return this.users.get(name)
  }
}

export default new UserService()
