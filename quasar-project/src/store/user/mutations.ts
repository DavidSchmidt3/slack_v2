import { Channel } from 'src/contracts'
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
  }

}

export default mutation
