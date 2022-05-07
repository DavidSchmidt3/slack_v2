import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @column()
  public channel_id: number

  @column()
  public joined_at: DateTime | null

  @column()
  public invited_at: DateTime | null

  @column()
  public kicked_at: DateTime | null
}
