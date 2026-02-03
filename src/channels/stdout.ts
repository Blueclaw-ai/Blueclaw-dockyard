import { Channel } from './types.js';

export const stdoutChannel: Channel = {
  async send(payload: any) {
    console.log(JSON.stringify(payload));
  },
};
