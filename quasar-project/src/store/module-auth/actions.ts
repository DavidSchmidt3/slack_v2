/* eslint-disable camelcase */
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { AuthStateInterface } from './state'
import { authService, authManager } from 'src/services'
import { LoginCredentials, RegisterData } from 'src/contracts'
const actions: ActionTree<AuthStateInterface, StateInterface> = {
  async check ({ commit, state, dispatch }) {
    try {
      commit('AUTH_START')
      const user = await authService.me()
      // get channels from response
      const channels = user?.user.channels
      const invuted_channels = user?.data.invited
      const joined_channels = user?.data.joined
      // join user to general channel - hardcoded for now
      if (user?.user.id !== state.user?.id) {
        console.log(user)
        if (channels) {
          channels.forEach((channel) => {
            dispatch('channels/join', channel, { root: true })
          })
        }
        // eslint-disable-next-line camelcase
        if (invuted_channels) {
          // eslint-disable-next-line camelcase
          invuted_channels.forEach((channel1) => {
            channels.forEach((channel) => {
              if (channel1.channel_id === channel.id) {
                commit('SET_INVITED_CHANNEL', { channel })
              }
            })
          })
        }
        if (joined_channels) {
          console.log('SDADA')
          // eslint-disable-next-line camelcase
          joined_channels.forEach((channel1) => {
            channels.forEach((channel) => {
              console.log(channel1)
              console.log(channel)
              if (channel.id === channel1.channel_id) {
                commit('SET_JOINED_CHANNEL', { channel })
              }
            })
          })
        }
      }

      commit('AUTH_SUCCESS', user.user)
      return user.user !== null
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
