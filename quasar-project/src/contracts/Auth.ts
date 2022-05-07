export interface ApiToken {
  type: 'bearer'
  token: string
  expires_at?: string
  expires_in?: number
}

export interface RegisterData {
  email: string
  password: string
  passwordConfirmation: string
  nickName: string
  name: string
  surname: string
}

export interface LoginCredentials {
  email: string
  password: string
  remember: boolean
}

export interface User {
  id: number
  email: string
  nickname: string,
  password: string,
  name: string,
  surname: string,
  createdAt: string,
  updatedAt: string
  // eslint-disable-next-line no-use-before-define
  channels: Array<Channel>
}

export interface Channel {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  owner_id: number
}

export interface UserInfo {
  id: number
  email: string
  nickname: string,
  name: string,
  surname: string,
  createdAt: string,
  updatedAt: string,
  // eslint-disable-next-line no-undef
  status : string
}
