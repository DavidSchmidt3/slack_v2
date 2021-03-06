import { Channel } from 'src/contracts/Auth'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ChannelsStateInterface } from './state'
import { ActivityService, channelService } from 'src/services'
import { RawMessage } from 'src/contracts'
import AcitivityService from 'src/services/AcitivityService'

const actions: ActionTree<ChannelsStateInterface, StateInterface> = {
  async join ({ commit }, channel: Channel) {
    try {
      commit('LOADING_START')
      const messagesCount = await channelService.join(channel.name).getMessagesCount()
      let messages = await channelService.getChannel(channel.name)?.loadSomeMessages(messagesCount - 20, messagesCount)
      if (!messages) {
        // eslint-disable-next-line no-const-assign
        messages = []
      }
      commit('SET_MESSAGE_INDEX', { channel, index: messagesCount - 20 })
      commit('SET_MESSAGES_COUNT', { channel, count: messagesCount })
      commit('LOADING_SUCCESS', { channel, messages })
      await channelService.acceptInvite(channel)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async invited_assign ({ commit }, channel: Channel) {
    try {
      commit('LOADING_START')
      commit('SET_INVITED', channel)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async create ({ commit }, { name, type }) {
    try {
      commit('LOADING_START')
      const channel = await channelService.create(name, type)
      commit('LOADING_SUCCESS', { channel })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async leaveOrDelete ({ commit }, { channel, userId } : { channel: string, userId: number }) {
    try {
      commit('LOADING_START')
      await channelService.leaveOrDelete(channel, userId)
      commit('SET_ACTIVE', 'general')
      commit('DELETE_CHANNEL', channel)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async leavePermanent ({ commit }, { channel, userId } : { channel: string, userId: number }) {
    try {
      commit('LOADING_START')
      await channelService.leavePermanent(channel, userId)
      commit('SET_ACTIVE', 'general')
      commit('DELETE_CHANNEL', channel)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async deleteChannel ({ commit }, { channel, userId } : { channel: string, userId: number }) {
    try {
      commit('LOADING_START')
      await channelService.delete(channel, userId)
      commit('DELETE_CHANNEL', channel)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async getChannelUsers ({ commit }, channel: string) {
    try {
      commit('LOADING_START')
      const users = await channelService.getChannelUsers(channel)
      commit('SET_CHANNEL_USERS', { channel, users })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async loadMoreMessages ({ commit }, { channel, startIndex, endIndex }) {
    try {
      const messages = await channelService.getChannel(channel)?.loadSomeMessages(startIndex, endIndex)
      commit('SET_MESSAGE_INDEX', { channel, index: startIndex })
      commit('LOADING_SUCCESS', { channel, messages })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async addUser ({ commit }, { channel, user }) {
    try {
      commit('LOADING_START')
      await channelService.addUser(channel, user)
      commit('LOADING_SUCCESS', { channel, messages: [] })
      commit('NEW_INVITATION', { channel, user })
      await AcitivityService.add_user(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async addUserDirectly ({ commit }, { channel, user }) {
    try {
      commit('LOADING_START')
      const response = await channelService.addUserDirectly(channel, user)
      commit('LOADING_SUCCESS', { channel: response, messages: [] })
      await AcitivityService.add_user(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async addUserDirectlyByNick ({ commit }, { channel, user }) {
    try {
      commit('LOADING_START')
      await channelService.addUserDirectlyByNick(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async inviteUser ({ commit }, { channel, user }) {
    try {
      await channelService.inviteUser(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async revokeUser ({ commit }, { channel, user }) {
    try {
      await channelService.revokeUser(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  // vote kick user
  async voteKick ({ commit }, { channel, user }) {
    try {
      await channelService.voteKick(channel, user)
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async setActiveChannel ({ commit }, channel: string) {
    try {
      commit('SET_ACTIVE', channel)
      const isOwner = await channelService.isOwner(channel)
      commit('SET_IS_OWNER', { channel, isOwner })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async leave ({ getters, commit }, channel: string | null) {
    const leaving: string[] = channel !== null ? [channel] : getters.joinedChannels

    leaving.forEach((c) => {
      channelService.leave(c)
      commit('CLEAR_CHANNEL', c)
    })
  },

  async disableNofitications ({ commit }) {
    console.log('vypinaaam')
    commit('DISABLE_NOTIFICATION')
  },

  async addMessage ({ commit, rootState }, { channel, message }: { channel: string, message: RawMessage }) {
    const newMessage = await channelService.in(channel)?.addMessage(message)
    commit('NEW_MESSAGE', { channel, message: newMessage, currentUser: rootState?.auth?.user?.id })
  },

  // eslint-disable-next-line camelcase
  async isTyping ({ commit }, { channel, usernum, message_typing }: { channel: string, usernum: number, message_typing: RawMessage }) {
    // eslint-disable-next-line camelcase
    const typed_message = await channelService.in(channel)?.isTyping(message_typing, usernum.toString())
    // eslint-disable-next-line camelcase
    const user = usernum.toString()
    // eslint-disable-next-line camelcase
    commit('IS_TYPING', { channel, user, message_typing })
  },

  async getAllChannels ({ commit }) {
    try {
      commit('LOADING_START')
      const channels = await channelService.getAllChannels()
      console.log('afdsfd', channels)
      commit('SET_ALL_CHANNELS', { channels })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  }
}

export default actions
