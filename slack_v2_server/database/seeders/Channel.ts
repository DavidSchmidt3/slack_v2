import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Channel from 'App/Models/Channel'
import User from 'App/Models/User'
import { ChannelType } from 'Contracts/enums'
export default class ChannelSeeder extends BaseSeeder {
  public async run() {
    await Channel.createMany([
      {
        name: 'general',
        type: ChannelType.PUBLIC,
        ownerId: 2,
      },
      {
        name: 'DBS',
        type: ChannelType.PRIVATE,
        ownerId: 1
      },
      {
        name: 'FIIT',
        type: ChannelType.PRIVATE,
        ownerId: 1
      },
      {
        name: 'PKS',
        type: ChannelType.PRIVATE,
        ownerId: 3
      },
      {
        name: 'PKS-archived',
        type: ChannelType.ARCHIVED,
        ownerId: 2
      }
    ])

    const getAttach = () => {
      const date = new Date().toISOString();
      return {
        invited_at: `${date.slice(0, 10)} ${date.slice(11, 19)}`,
        joined_at: null,
        kicked_at: null
      }
    }

    const getKick = () => {
      const date = new Date().toISOString();
      return {
        kicked_at: `${date.slice(0, 10)} ${date.slice(11, 19)}`,
        kicker_id: 1,
        channel_id: 1
      }
    }
    const users = await User.query();
    users.forEach(user => {
      user.related('channels').attach({
        [1]: getAttach(),
        [2]: getAttach(),
        [3]: getAttach()
      });
    });
    users[1].related('kicks').attach({
      [1]: getKick(),
      [2]: getKick(),
    });
  }
}
