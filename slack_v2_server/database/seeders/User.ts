import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.updateOrCreateMany('name', [
      {
        email: 'david@test.sk',
        password: '123456789',
        name: 'Dávid',
        surname: 'Schmidt',
        nickname: 'David231',
      },
      {
        email: 'ctibor@test.sk',
        password: '123456789',
        name: 'Ctibor',
        surname: 'Kovalčik',
        nickname: 'Ctibor231',
      },
      {
        email: 'jozko@test.sk',
        password: '123456789',
        name: 'Jozef',
        surname: 'Mrkvička',
        nickname: 'Jozef222',
      }
    ])
  }
}
