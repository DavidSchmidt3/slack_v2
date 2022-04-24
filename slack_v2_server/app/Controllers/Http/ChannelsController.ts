// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Channel from "App/Models/Channel"
import ChannelUser from "App/Models/ChannelUser"
import User from "App/Models/User"
import { ChannelType } from "Contracts/enums"

export default class ChannelsController {

  // create channel
  async create ({ request, response, params, session, auth }) {
    const user = auth.user as User
    const channel = await Channel.create({
      name: request.all()['channel'],
      ownerId: user.$attributes.id,
      type: ChannelType.PRIVATE
    })

    // add user to table ChannelUser
    await ChannelUser.create({
      user_id: user.$attributes.id,
      channel_id: channel.$attributes.id
      })


    return channel
  }

  async add_user({ request, response, params, session, auth }) {
    console.log(request.all())

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

}
