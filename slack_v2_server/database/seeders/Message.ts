import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Message from 'App/Models/Message'

export default class MessageSeeder extends BaseSeeder {
  public async run() {
    await Message.createMany([
      {
        message: "Hello David, how are you",
        createdBy: 2,
        channelId: 1
      },
      {
        message: "Hi, I'm fine",
        createdBy: 1,
        channelId: 1
      },
      {
        message: "That's great",
        createdBy: 3,
        channelId: 1
      }
    ])
  }
}
