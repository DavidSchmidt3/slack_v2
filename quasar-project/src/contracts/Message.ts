import { User } from './Auth'

export type RawMessage = string

export interface SerializedMessage {
  createdBy: number
  message: string
  channelId: number,
  createdAt: string,
  updatedAt: string,
  id: number,
  author: User
}
