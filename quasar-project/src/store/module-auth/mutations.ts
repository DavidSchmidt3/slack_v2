import { User } from 'src/contracts'
import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'

const mutation: MutationTree<AuthStateInterface> = {
  AUTH_START (state) {
    state.status = 'pending'
    state.errorMessage = ''
  },
  AUTH_SUCCESS (state, user: User | null) {
    state.status = 'success'
    state.user = user
  },
  AUTH_ERROR (state, errors) {
    state.status = 'error'
    let message = 'Something went wrong'
    if (errors.response.status === 422) {
      message = `${errors.response.data.errors.map((error: {field: string, rule: string, message: string}) => error.field).join(', ')} must be unique`
    } if (errors.response.status === 500) {
      message = 'Internal server error'
    }
    state.errorMessage = message
  }
}

export default mutation
