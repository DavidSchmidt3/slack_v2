import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Channel from 'App/Models/Channel'
import User from 'App/Models/User'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'
import { ChannelType } from 'Contracts/enums'

export default class AuthController {
  async register({ request }: HttpContextContract) {
    // if invalid, exception
    const data = await request.validate(RegisterUserValidator)
    const user = await User.create(data)
    // join user to all public channels
    const channels = await Channel.query().where('type', ChannelType.PUBLIC)
    const date = new Date().toISOString()
    for (const channel of channels) {
      user?.related('channels').attach({[channel.id]: 
        {
          user_id: user.id,
          channel_id: channel.id,
          channel_name : channel.name,
          invited_at: `${date.slice(0, 10)} ${date.slice(11, 19)}`
        }})
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
    // get only channels where joined at is null
    const a = auth.user
    await auth.user!.load('channels')
    
    if (a != undefined) {
      a.$extras={
        invited: await auth.user!.related('channels').pivotQuery().whereNull('joined_at'),
        joined: await auth.user!.related('channels').pivotQuery().whereNotNull('joined_at')
      }
    }
    return {user: a, data: a?.$extras}
  }
}
