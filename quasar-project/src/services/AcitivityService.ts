import { authService } from 'src/services'
import { Channel, User } from 'src/contracts'
import { authManager } from '.'
import { BootParams, SocketManager } from './SocketManager'

class ActivitySocketManager extends SocketManager {
  public subscribe ({ store }: BootParams): void {
    this.socket.on('user:list', (onlineUsers: User[]) => {
      console.log('Online users list', onlineUsers)
      // cycle for online users
      for (const user of onlineUsers) {
        // if user is not in store, add him
        store.commit('user/ONLINE_USER', user)
      }
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

    this.socket.on('user:setdnd', (user: User) => {
      console.log('User is set dnd', user)
      store.commit('user/DND_USER', user)
    })

    this.socket.on('user:setonline', async (user: User) => {
      console.log('User is set online', user)
      if (user !== await authService.me()) {
        store.commit('user/ONLINE_USER', user)
      }
    })

    this.socket.on('user:setoffline', (user: User) => {
      console.log('User is set offline', user)
      store.commit('user/OFFLINE_USER', user)
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
    this.socket.emit('addUser', user)
  }

  public set_dnd (): void {
    console.log('setting dnd for user')
    this.socket.emit('setDnd')
  }

  public set_online (): void {
    console.log('setting online for user')
    this.socket.emit('setOnline')
  }

  public set_offline (): void {
    console.log('setting offline for user')
    this.socket.emit('setOffline')
  }
}

export default new ActivitySocketManager('/')
