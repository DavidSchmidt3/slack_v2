import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Message from 'App/Models/Message'
import User from 'App/Models/User'
import { ChannelType } from 'Contracts/enums'
import Channel from './Channel'

export default class Channel_users extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @column()
  public channel_id: number

  @column()
  public joined_at: DateTime

  @column()
  public invited_at: DateTime

  @column()
  public kicked_at: DateTime


  @belongsTo(() => Channel, {
    foreignKey: 'channel_Id',
  })
  public channel: BelongsTo<typeof Channel>


  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>
}