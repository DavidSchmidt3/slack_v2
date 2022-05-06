import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'

const getters: GetterTree<UserStateInterface, StateInterface> = {
  getInvited (context) {
    return context.invited_channels !== null
  },
  getJoined (context) {
    return context.joined_channels !== null
  },
  getNewInvitations (context) {
    return context.new_invitations !== null
  }
}

export default getters
