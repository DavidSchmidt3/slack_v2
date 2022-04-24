import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ChannelsStateInterface } from './state'
import { channelService } from 'src/services'
import { RawMessage } from 'src/contracts'

const actions: ActionTree<ChannelsStateInterface, StateInterface> = {
  async join ({ commit }, channel: string) {
    try {
      commit('LOADING_START')
      const messagesCount = await channelService.join(channel).getMessagesCount()
      const messages = await channelService.getChannel(channel)?.loadSomeMessages(messagesCount - 20, messagesCount)
      commit('SET_MESSAGE_INDEX', messagesCount - 20)
      commit('SET_MESSAGES_COUNT', messagesCount)
      commit('LOADING_SUCCESS', { channel, messages })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async create ({ commit }, channel: string) {
    try {
      commit('LOADING_START')
      console.log('TU SOM MORE RE A')
      const messages = await channelService.create(channel)
      commit('LOADING_SUCCESS', { channel, messages })
    } catch (err) {
      commit('LOADING_ERROR', err)
      throw err
    }
  },

  async loadMoreMessages ({ commit }, { channel, startIndex, endIndex }) {
    try {
      const messages = await channelService.getChannel(channel)?.loadSomeMessages(startIndex, endIndex)
      commit('SET_MESSAGE_INDEX', startIndex)
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
