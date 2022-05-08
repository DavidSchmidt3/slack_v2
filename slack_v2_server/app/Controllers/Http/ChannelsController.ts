// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Channel from "App/Models/Channel"
import ChannelUser from "App/Models/ChannelUser"
import KickUser from "App/Models/KickUser"
import User from "App/Models/User"
import { ChannelType } from "Contracts/enums"
import { DateTime } from 'luxon'

export default class ChannelsController {

  // create channel
  async create ({ request, auth }) {
    const user = auth.user as User
    const channel = await Channel.create({
      name: request.all()['channel'],
      ownerId: user.$attributes.id,
      type: request.all()['type'] === 'private' ? ChannelType.PRIVATE : ChannelType.PUBLIC
    })

    const date = new Date().toISOString()
    const today = `${date.slice(0, 10)} ${date.slice(11, 19)}`

    await user.related('channels').attach({
      [channel.id]: {
        joined_at: today
      }
    })
    return channel

    // add user to table ChannelUser
    //add all users to this channel
  }

  async add_user({ request }) {
    const emailos = request.all()['userEmail']
    const channel = request.all()['channel']
    try
    {
      const user = await User.findByOrFail('email', emailos)
      const channelOne = await Channel.findByOrFail('name', channel)
      await user.related('channels').attach([channelOne.id])
    }
    catch(e)
    {
      console.log(e)
    }

    // add user to table ChannelUser
    //await ChannelUser.create({
    //  user_id: user.$attributes.id,
    //  channel_id: channel.$attributes.id
    //  })

    // return channel
  }

  async inviteUser({ request }): Promise<void> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    const user = await User.findByOrFail('nickname', params.userName)

    console.log(channel, user)
    const potentialChannelUser = await ChannelUser.query()
      .where('channel_id', channel.id)
      .where('user_id', user.id)
      .first()

    if (potentialChannelUser) {
      potentialChannelUser.kicked_at = null
      potentialChannelUser.joined_at = null
      potentialChannelUser.invited_at = DateTime.local()
      potentialChannelUser.save()
      return
    }
    await user.related('channels').attach({
      [channel.id]: {
        joined_at: null,
        invited_at: new Date().toISOString()
      }
    })
  }

  async revokeUser({ request }): Promise<void> {
    const params = request.all()
    console.log(params);
    const channel = await Channel.findByOrFail('name', params.channel)
    const user = await User.findByOrFail('nickname', params.userName)
    await ChannelUser.query()
      .where('channel_id', channel.id)
      .where('user_id', user.id)
      .update('kicked_at', DateTime.local())
  }

  async addUserDirectly({ request }): Promise<Channel> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    const user = await User.findByOrFail('email', params.userEmail)

    const date = new Date().toISOString()
    const today = `${date.slice(0, 10)} ${date.slice(11, 19)}`
    await user.related('channels').attach({
      [channel.id]: {
        joined_at: today
      }
    })

    return channel
  }

  async addUserDirectlyByNick({ request }): Promise<Channel> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    const user = await User.findByOrFail('nickname', params.userNick)

    const date = new Date().toISOString()
    const today = `${date.slice(0, 10)} ${date.slice(11, 19)}`
    await user.related('channels').attach({
      [channel.id]: {
        joined_at: today
      }
    })

    return channel
  }

  async leaveOrDelete({ request }): Promise<boolean> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    if (params.userId === channel.ownerId) {
      await channel.delete()
      return true
    } else {
      await ChannelUser.query()
        .where('channel_id', channel.id)
        .where('user_id', params.userId)
        .delete()
      return false
    }
  }

  async leave({ request }): Promise<void> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    await ChannelUser.query()
      .where('channel_id', channel.id)
      .where('user_id', params.userId)
      .delete()
  }

  async delete({ request }): Promise<void> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    await channel.delete()
  }

  async getChannelUsers({ request }): Promise<User[]> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    const channelUsers = await ChannelUser.query().where('channel_id', channel.id)
    const users = await User.query().whereIn('id', channelUsers.map(channelUser => channelUser.user_id))

    return users
  }

  async getPublicChannels(): Promise<Channel[]> {
    const channels = await Channel.query().where('type', ChannelType.PUBLIC)
    return channels
  }

  async deleteOldChannels(): Promise<void> {
    const channels = await Channel.query()
    for (const channel of channels) {
      const lastMessage = await channel.related('messages').query().orderBy('created_at', 'desc').first()
      if (lastMessage) {
        const lastMessageDate = lastMessage.createdAt.toJSDate()
        const now = new Date()
        const diff = now.getTime() - lastMessageDate.getTime()
        if (diff > 30 * 24 * 60 * 60 * 1000) {
          await channel.delete()
        }
      }
    }
  }

  async voteKick({ request, auth }): Promise<void> {
    const params = request.all()
    const channel = await Channel.findByOrFail('name', params.channel)
    const user = await User.findByOrFail('nickname', params.userName)
    const potentialKick = await KickUser
      .query()
      .where('channel_id', channel.id)
      .where('user_id', user.id)
      .where('kicker_id', auth.user.id)
      .first()

    if (!potentialKick) {
      await KickUser.create({
        channel_id: channel.id,
        user_id: user.id,
        kicker_id: auth.user.id,
        kicked_at: DateTime.local()
      })

      const allUserKicks = await KickUser.query()
        .where('channel_id', channel.id)
        .where('user_id', user.id)

      if (allUserKicks.length === 3) {
        await ChannelUser.query()
          .where('channel_id', channel.id)
          .where('user_id', user.id)
          .update('kicked_at', DateTime.local())
      }
    }
  }


  async getAllUsers({ auth }): Promise<User[]> {
    // gett all users besides logged user
    const user = auth.user as User
    console.log(user)
    const users = (await User.query()).filter(user => user.id !== auth.user!.id)
    return users
  }

}
