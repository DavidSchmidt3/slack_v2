import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class KickUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public kicker_id: number

  @column()
  public channel_id: number

  @column()
  public kicked_at: DateTime | null
}
