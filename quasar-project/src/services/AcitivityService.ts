import { Channel, User } from 'src/contracts'
import { authManager } from '.'
import { BootParams, SocketManager } from './SocketManager'

class ActivitySocketManager extends SocketManager {
  public subscribe ({ store }: BootParams): void {
    this.socket.on('user:list', (onlineUsers: User[]) => {
      console.log('Online users list', onlineUsers)
    })

    this.socket.on('user:online', (user: User) => {
      console.log('User is online', user)
      store.commit('user/ONLINE_USER', user)
      console.log('state', store.state.user)
    })

    this.socket.on('user:offline', (user: User) => {
      console.log('User is offline', user)
      store.commit('user/OFFLINE_USER', user)
    })
    this.socket.on('user:dnd', (user: User) => {
      console.log('User is dnd', user)
      store.commit('user/DND_USER', user)
    })
    authManager.onChange((token) => {
      if (token) {
        this.socket.connect()
      } else {
        this.socket.disconnect()
      }
    })
  }

  public add_user (channel: Channel, user: User): void {
    console.log("som tu")
    this.socket.emit('addUser', user)
  }

  public getUsers (): Promise<User[]> {
    console.log('getting all users from ws')
    return this.emitAsync('getUsers')
  }
}

export default new ActivitySocketManager('/')
