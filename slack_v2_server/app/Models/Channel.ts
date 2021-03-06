import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Message from 'App/Models/Message'
import User from 'App/Models/User'
import { ChannelType } from 'Contracts/enums'

export default class Channel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public ownerId: number

  @column()
  public type: ChannelType

  @column.dateTime()
  public lastMessageDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Message, {
    foreignKey: 'channelId',
  })
  public messages: HasMany<typeof Message>

  @belongsTo(() => User, {
    foreignKey: 'ownerId',
  })
  public owner: BelongsTo<typeof User>
}
