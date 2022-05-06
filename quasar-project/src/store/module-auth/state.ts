import { Channel, User } from 'src/contracts'

export interface AuthStateInterface {
  user: User | null,
  status: 'pending' | 'success' | 'error',
  errorMessage: string
  invitedChannels: { [channel: string]: Channel },
  joinedChannels: { [channel: string]: Channel },
}

function state (): AuthStateInterface {
  return {
    user: null,
    status: 'pending',
    errorMessage: '',
    invitedChannels: {},
    joinedChannels: {}
  }
}

export default state
