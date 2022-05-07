import type { WsContextContract } from '@ioc:Ruby184/Socket.IO/WsContext'
import { inject } from '@adonisjs/core/build/standalone'

// inject repository from container to controller constructor
// we do so because we can extract database specific storage to another class
// and also to prevent big controller methods doing everything
// controler method just gets data (validates it) and calls repository
// also we can then test standalone repository without controller
// implementation is bind into container inside providers/AppProvider.ts
@inject(['Repositories/MessageRepository'])
export default class MessageController {
  public async invites({ params, socket, auth }: WsContextContract, content: string) {
    // broadcast message to other users in channel
    console.log(content)
    console.log(params)
    // const data = {
    //   channel: params.name,
    //   user: auth.user!.nickname,
    //   content: content
    // }
    socket.broadcast.emit('typing', auth.user!.nickname, content)
    // return message to sender
    return params
  }
}
