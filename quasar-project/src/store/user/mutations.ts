/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { Channel, User, UserInfo } from 'src/contracts'
import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutation: MutationTree<UserStateInterface> = {
  USER_START (state) {
    state.joined_channels = {}
    state.invited_channels = {}
  },
  USER_SUCCESS (state) {
    state.joined_channels = {}
    state.invited_channels = {}
  },
  USER_ERROR (state, errors) {
    state.joined_channels = {}
    state.invited_channels = {}
    let message = 'Something went wrong'
    if (errors.response.status === 422) {
      message = `${errors.response.data.errors.map((error: {field: string, rule: string, message: string}) => error.field).join(', ')} must be unique`
    } if (errors.response.status === 500) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      message = 'Internal server error'
    }
    state.joined_channels = {}
    state.invited_channels = {}
  },
  NEW_INVITATION (state, channel: Channel) {
    state.invited_channels[channel.name] = channel
  },
  All_USERS (state, userslist: User[]) {
    console.log(userslist)
    userslist.forEach((user: User) => {
      if (!state.users[user.name]) {
        const userInfo: UserInfo = {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          name: user.name,
          surname: user.surname,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          status: 'offline'
        }
        state.users[user.name] = userInfo
      }
    })
  },
  ONLINE_USER (state, user: User) {
    if (state.users[user.name]) {
      state.users[user.name].status = 'online'
    } else {
      const userInfo: UserInfo = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        surname: user.surname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: 'online'
      }
      state.users[user.name] = userInfo
    }
  },
  OFFLINE_USER (state, user: User) {
    if (state.users[user.name]) {
      state.users[user.name].status = 'offline'
    } else {
      const userInfo: UserInfo = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        surname: user.surname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: 'offline'
      }
      state.users[user.name] = userInfo
    }
  },
  DND_USER (state, user: User) {
    if (state.users[user.name]) {
      state.users[user.name].status = 'dnd'
    } else {
      const userInfo: UserInfo = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        surname: user.surname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: 'dnd'
      }
      state.users[user.name] = userInfo
    }
  }
}

export default mutation
