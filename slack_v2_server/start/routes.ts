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
  .on('typing', 'MessageController.isTyping')
  .on('addUser', 'ActivityController.addUser')
  .on('getUsers', 'ActivityController.getUsers')


Ws.namespace('users/:name')
  .on('invite_channel', 'InvitesController.invites')

Route.group(() => {
  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout').middleware('auth')
  Route.get('me', 'AuthController.me').middleware('auth')
}).prefix('auth')

Route.post('channels', 'ChannelsController.create').middleware('auth').as('createChannel5')
Route.post('channels/add', 'ChannelsController.add_user').middleware('auth').as('adduser5')
Route.post('channels/addUserDirectly', 'ChannelsController.addUserDirectly').middleware('auth').as('addUserDirectly')
Route.post('channels/addUserDirectlyByNick', 'ChannelsController.addUserDirectlyByNick').middleware('auth').as('addUserDirectlyByNick')
Route.post('channels/leaveOrDelete', 'ChannelsController.leaveOrDelete').middleware('auth').as('leaveOrDelete')
Route.post('channels/leave', 'ChannelsController.leave').middleware('auth').as('leave')
Route.post('channels/inviteUser', 'ChannelsController.inviteUser').middleware('auth').as('inviteUser')
Route.post('channels/voteKick', 'ChannelsController.voteKick').middleware('auth').as('voteKick')
Route.post('channels/revokeUser', 'ChannelsController.revokeUser').middleware('auth').as('revokeUser')
Route.post('channels/delete', 'ChannelsController.delete').middleware('auth').as('delete')
Route.get('channels/getChannelUsers', 'ChannelsController.getChannelUsers').middleware('auth').as('getChannelUsers')
Route.get('channels/getOwner', 'AuthController.getOwner').middleware('auth').as('getOwner')
Route.get('channels/public', 'ChannelsController.getPublicChannels').middleware('auth').as('getPublicChannels')
Route.get('channels/getInvitedChannels', 'AuthController.getInvitedChannels').middleware('auth').as('getInvitedChannels')
Route.get('channels/getJoinedChannels', 'AuthController.getJoinedChannels').middleware('auth').as('getJoinedChannels')
Route.get('channels/getAllChannels', 'AuthController.getAllChannels').middleware('auth').as('getAllChannels')
Route.post('channels/acceptInvite', 'AuthController.acceptInvite').middleware('auth').as('invite')
Route.get('users/all', 'ChannelsController.getAllUsers').middleware('auth').as('getAllUsers')
