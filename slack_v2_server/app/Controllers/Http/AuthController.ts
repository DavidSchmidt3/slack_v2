import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Channel from 'App/Models/Channel'
import Channel_users from 'App/Models/Channel_users'
import User from 'App/Models/User'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'

export default class AuthController {
  async register({ request }: HttpContextContract) {
    // if invalid, exception
    const data = await request.validate(RegisterUserValidator)
    const user = await User.create(data)
    // join user to general channel
    const channels = await Channel_users.query().where('user_id', user.id).whereNotNull('joined_at')
    for (const channel of channels) {
      user?.related('channels').attach([channel.id])
    }
    return user
  }

  async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    return auth.attempt(email, password)
  }

  async logout({ auth }: HttpContextContract) {
    return auth.use('api').logout()
  }

  async me({ auth }: HttpContextContract) {
    await auth.user!.load('channels')
    return auth.user
  }

  async getInvited({ auth }: HttpContextContract) {
    const user = await auth.user
    const invited = Channel_users.query().where('user_id', user!.id)
    console.log(invited)
    return invited
  }

  async getInvitedChannels({ auth }): Promise<Channel[]> {
    const all_channels = await Channel_users.query().where('user_id', auth.user!.id).whereNull('joined_at')
    const channels = await Channel.query().whereIn('id', all_channels.map(channel => channel.channel_id))
    return channels
  }

  async getJoinedChannels({ auth }): Promise<Channel[]> {
    const channels = await Channel_users.query().where('user_id', auth.user.id ).whereNotNull('joined_at')
    const channels1 = await Channel.query().whereIn('id', channels.map(channel => channel.channel_id))
    return channels1
  }
}
