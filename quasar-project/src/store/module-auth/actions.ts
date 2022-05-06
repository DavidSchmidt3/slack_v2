import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { AuthStateInterface } from './state'
import { authService, authManager, channelService } from 'src/services'
import { LoginCredentials, RegisterData } from 'src/contracts'
const actions: ActionTree<AuthStateInterface, StateInterface> = {
  async check ({ commit, state, dispatch }) {
    try {
      commit('AUTH_START')
      const user = await authService.me()
      // get channels from response
      // const channels = user?.channels
      const joinedChannels = channelService.getJoinedChannels()
      const invitedChannels = channelService.getInvitedChannels()
      console.log(joinedChannels, invitedChannels)
      // join user to general channel - hardcoded for now
      if (user?.id !== state.user?.id) {
        // dispatch all channesl from channels
        if (joinedChannels) {
          (await joinedChannels).forEach((joinedchannel: unknown) => {
            dispatch('channels/join', joinedchannel, { root: true })
          })
        }
        if (invitedChannels) {
          (await invitedChannels).forEach((invitedchannel: unknown) => {
            dispatch('channels/invited_assign', invitedchannel, { root: true })
          })
          dispatch('user/join', user, { root: true })
        }
      }

      commit('AUTH_SUCCESS', user)
      return user !== null
    } catch (err) {
      commit('AUTH_ERROR', err)
      throw err
    }
  },
  async register ({ commit }, form: RegisterData) {
    try {
      commit('AUTH_START')
      const user = await authService.register(form)
      commit('AUTH_SUCCESS', null)
      return user
    } catch (err) {
      commit('AUTH_ERROR', err)
      throw err
    }
  },
  async login ({ commit }, credentials: LoginCredentials) {
    try {
      commit('AUTH_START')
      const apiToken = await authService.login(credentials)
      commit('AUTH_SUCCESS', null)
      // save api token to local storage and notify listeners
      authManager.setToken(apiToken.token)
      return apiToken
    } catch (err) {
      commit('AUTH_ERROR', err)
      throw err
    }
  },
  async logout ({ commit, dispatch }) {
    try {
      commit('AUTH_START')
      await authService.logout()
      await dispatch('channels/leave', null, { root: true })
      commit('AUTH_SUCCESS', null)
      // remove api token and notify listeners
      authManager.removeToken()
    } catch (err) {
      commit('AUTH_ERROR', err)
      throw err
    }
  }
}

export default actions
