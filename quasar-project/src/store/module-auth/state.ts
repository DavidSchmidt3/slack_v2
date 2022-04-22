import { User } from 'src/contracts'

export interface AuthStateInterface {
  user: User | null,
  status: 'pending' | 'success' | 'error',
  errorMessage: string
}

function state (): AuthStateInterface {
  return {
    user: null,
    status: 'pending',
    errorMessage: ''
  }
}

export default state
