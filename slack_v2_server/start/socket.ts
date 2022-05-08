/*
|--------------------------------------------------------------------------
| Websocket events
|--------------------------------------------------------------------------
|
| This file is dedicated for defining websocket namespaces and event handlers.
|
*/

import Ws from '@ioc:Ruby184/Socket.IO/Ws'

Ws.namespace('/')
.connected('ActivityController.onConnected')
.disconnected('ActivityController.onDisconnected')
  .on('getUsers', 'ActivityController.getUsers')
  .on('setDnd', 'ActivityController.onDoNotDisturb')
  .on('setOnline', 'ActivityController.OnSetOnline')
  .on('setOffline', 'ActivityController.OnSetOffline')

