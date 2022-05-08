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
    const invite = await UserService.in(user)?.invitation(user)
    if (invite) {
      commit('NEW_INVITATION', { channel })
    }
  },
  async getAllUsers ({ commit }) {
    const all_users = await userService.getAllUsers()
    const users = this.state.user.users
    console.log(all_users)
    commit('All_USERS', all_users)

    console.log(this.state.user)
  }
}

export default actions
