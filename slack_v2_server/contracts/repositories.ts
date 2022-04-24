// here we are declaring our MessageRepository types for Repositories/MessageRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/MessageRepository' {
  export interface SerializedMessage {
    createdBy: number
    content: string
    channelId: number,
    createdAt: string,
    updatedAt: string,
    id: number,
    author: {
      id: number,
      email: string,
      createdAt: string,
      updatedAt: string
    }
  }

  export interface MessageRepositoryContract {
    getAll(channelName: string): Promise<SerializedMessage[]>
    getSome(channelName: string, startIndex: number, endIndex: number): Promise<SerializedMessage[]>
    getMessagesCount(channelName: string): Promise<number>
    create(channelName: string, userId: number, content: string): Promise<SerializedMessage>
  }

  const MessageRepository: MessageRepositoryContract
  export default MessageRepository
}
