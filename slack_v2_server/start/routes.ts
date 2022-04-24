/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import Ws from '@ioc:Ruby184/Socket.IO/Ws'

// this is dynamic namespace, in controller methods we can use params.name
Ws.namespace('channels/:name')
  // .middleware('channel') // check if user can join given channel
  .on('loadAllMessages', 'MessageController.loadAllMessages')
  .on('loadSomeMessages', 'MessageController.loadSomeMessages')
  .on('getMessagesCount', 'MessageController.getMessagesCount')
  .on('addMessage', 'MessageController.addMessage')

Route.group(() => {
  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout').middleware('auth')
  Route.get('me', 'AuthController.me').middleware('auth')
}).prefix('auth')

Route.post('channels', 'ChannelsController.create').middleware('auth').as('createChannel5')
Route.post('channels/add', 'ChannelsController.add_user').middleware('auth').as('adduser5')
Route.post('channels/leaveOrDelete', 'ChannelsController.leaveOrDelete').middleware('auth').as('leaveOrDelete')
Route.get('channels/getChannelUsers', 'ChannelsController.getChannelUsers').middleware('auth').as('getChannelUsers')
