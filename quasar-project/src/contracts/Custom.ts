export interface Data {
  channel_name : string
  channel_id : number,
  id: number,
  invited_at : string,
  joined_at : string,
  kicked_at : string,
  user_id : number,
}

export interface arrayData {
  invited: Data[],
  joined: Data[],
}
