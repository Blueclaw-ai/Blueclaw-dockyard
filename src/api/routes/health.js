import { ServerResponse } from 'node:http';
import { sendJson } from '../utils.js';

export async function healthRoute(_req: any, res: ServerResponse) {
  sendJson(res, 200, { ok: true, status: 'online' });
}
