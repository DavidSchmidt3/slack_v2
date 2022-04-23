import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Channel from 'App/Models/Channel'
import ChannelUser from 'App/Models/ChannelUser'
import Channel_users from 'App/Models/Channel_users'
import User from 'App/Models/User'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'

export default class AuthController {
  async register({ request }: HttpContextContract) {
    // if invalid, exception
    const data = await request.validate(RegisterUserValidator)
    const user = await User.create(data)
    // join user to general channel
    const general = await Channel.findByOrFail('name', 'general')
    
    await user.related('channels').attach([general.id])

    return user
  }

  async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    
    //get user id
    const user1 = await User.findByOrFail ('email', email)

    

    const user = auth.use('api').attempt(email, password)

    
    const user5 = await User.findByOrFail ('id', user1.id)
    console.log(user5)

    const bIds = await ChannelUser.query().where('user_id', user1.id)
    console.log(bIds[0].channel_id)
    console.log(bIds[1].channel_id)
    console.log((bIds.length))
    
    const channels = await ChannelUser.findBy ('user_id', user1.id)
    console.log(channels)
    



    //const user_channels = await Channel_users.findByOrFail ('user_id', 5)
    
  

    return auth.attempt(email, password)
  }

  async logout({ auth }: HttpContextContract) {
    return auth.use('api').logout()
  }

  async me({ auth }: HttpContextContract) {
    await auth.user!.load('channels')
    return auth.user
  }
}