import { Channel } from './types.js';

export const webhookChannel: Channel = {
  async send(payload: any) {
    const url = process.env.WEBHOOK_URL;
    if (!url) return;
    const data = JSON.stringify(payload);
    const { request } = await import('node:http');
    const { URL } = await import('node:url');
    const u = new URL(url);
    const opts = {
      method: 'POST',
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: u.pathname + u.search,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    await new Promise((resolve, reject) => {
      const req = request(opts, res => {
        res.on('data', () => {});
        res.on('end', resolve);
      });
      req.on('error', reject);
      req.write(data);
      req.end();
    });
  },
};
