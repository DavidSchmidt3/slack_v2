
import { Channel } from 'src/contracts'

export interface UserStateInterface {
  joined_channels: { [channel: string]: Channel },
  invited_channels: { [channel: string]: Channel },
  new_invitations: { [channel: string]: Channel }
}

function state (): UserStateInterface {
  return {
    joined_channels: {},
    invited_channels: {},
    new_invitations: {}
  }
}

export default state
