import { Channel } from 'src/contracts/Auth'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ChannelsStateInterface } from './state'
import { channelService } from 'src/services'
import { RawMessage } from 'src/contracts'

const actions: ActionTree<ChannelsStateInterface, StateInterface> = {
  async join ({ commit }, channel: Channel) {
    try {
      commit('LOADING_START')
      console.log(channel)
      const messagesCount = await channelService.join(channel.name).getMessagesCount()
      console.log(messagesCount)
      const messages = await channelService.getChannel(channel.name)?.loadSomeMessages(messagesCount - 20, messagesCount)
      // disable eslint
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // get channel name
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      commit('SET_MESSAGE_INDEX', { channel, index: messagesCount - 20 })
      commit('SET_MESSAGES_COUNT', { channel, count: messagesCount })
      commit('LOADING_SUCCESS', { channel, messages })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async create ({ commit }, { name, type }) {
    try {
      commit('LOADING_START')
      const messages = await channelService.create(name, type)
      commit('LOADING_SUCCESS', { name, messages })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async leaveOrDelete ({ commit }, { channel, userId } : { channel: string, userId: number }) {
    try {
      commit('LOADING_START')
      await channelService.leaveOrDelete(channel, userId)
      commit('CLEAR_CHANNEL', channel)
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

  async leave ({ getters, commit }, channel: string | null) {
    const leaving: string[] = channel !== null ? [channel] : getters.joinedChannels

    leaving.forEach((c) => {
      channelService.leave(c)
      commit('CLEAR_CHANNEL', c)
    })
  },
  async addMessage ({ commit }, { channel, message }: { channel: string, message: RawMessage }) {
    const newMessage = await channelService.in(channel)?.addMessage(message)
    commit('NEW_MESSAGE', { channel, message: newMessage })
  }
}

export default actions
