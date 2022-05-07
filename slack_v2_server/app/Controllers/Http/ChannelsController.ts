// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Channel from "App/Models/Channel"
import ChannelUser from "App/Models/ChannelUser"
import User from "App/Models/User"
import { ChannelType } from "Contracts/enums"

export default class ChannelsController {

  // create channel
  async create ({ request, params, auth }) {
    const user = auth.user as User
    console.log(request.all())
    console.log(params)
    const channel = await Channel.create({
      name: request.all()['channel'],
      ownerId: user.$attributes.id,
      type: request.all()['type'] === 'private' ? ChannelType.PRIVATE : ChannelType.PUBLIC
    })

    await user.related('channels').attach([channel.id])


    // add user to table ChannelUser

    //add all users to this channel

  }

  async add_user({ request }) {
    console.log(request.all()['userEmail'])
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


}
