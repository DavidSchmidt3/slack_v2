import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Channel from './Channel'

export default class Channel_users extends BaseModel {
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


  @belongsTo(() => Channel, {
    foreignKey: 'channel_Id',
  })
  public channel: BelongsTo<typeof Channel>


  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>
}
