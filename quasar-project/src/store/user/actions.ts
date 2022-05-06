/* eslint-disable camelcase */
import { userService } from 'src/services'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'
import { User } from 'src/contracts/Auth'
import UserService from 'src/services/UserService'
const actions: ActionTree<UserStateInterface, StateInterface> = {
  async join ({ commit }, User: User) {
    try {
      commit('USER_START')
      const user = await userService.join(User.email)
      const invited_channels = await userService.getInvitedChannels()
      commit('USER_SUCCESS', user)
      return user
    } catch (err) {
      commit('USER_ERROR', err)
      throw err
    }
  },
  async addUser ({ commit }, { channel, user }) {
    console.log(channel)
    console.log('here')
    console.log(user)
    const invite = await UserService.in(user)?.invitation(user)
    console.log(invite)
    if (invite) {
      console.log('here')
      commit('NEW_INVITATION', { channel })
    }
  }
}

export default actions
