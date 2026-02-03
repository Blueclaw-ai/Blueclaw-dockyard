export interface Channel {
  send(payload: any): Promise<void>;
}
