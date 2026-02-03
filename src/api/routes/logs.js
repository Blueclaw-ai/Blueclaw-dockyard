import { ServerResponse } from 'node:http';
import { sendJson } from '../utils.js';
import { readLastLogs } from '../../store/logs.js';

export async function logsRoute(_req, res) {
  const logs = await readLastLogs(50);
  sendJson(res, 200, { ok: true, logs });
}
