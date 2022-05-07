/*
|--------------------------------------------------------------------------
| Websocket events
|--------------------------------------------------------------------------
|
| This file is dedicated for defining websocket namespaces and event handlers.
|
*/

import Ws from '@ioc:Ruby184/Socket.IO/Ws'
import User from 'App/Models/User'

Ws.namespace('/')
.connected('ActivityController.onConnected')
.disconnected('ActivityController.onDisconnected')
  .on('getUsers', ({ socket }, user: User) => {
    console.log('getting all users from ws',socket,user)
  })
