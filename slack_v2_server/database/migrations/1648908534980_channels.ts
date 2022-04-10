import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { ChannelType } from 'Contracts/enums'
export default class Channels extends BaseSchema {
  protected tableName = 'channels'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.string('name', 30).notNullable().unique()
      table.enum('type', Object.values(ChannelType))
        .defaultTo(ChannelType.PUBLIC)
        .notNullable()
      table.timestamp('last_message_date', { useTz: true }).nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
