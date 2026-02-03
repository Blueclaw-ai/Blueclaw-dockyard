import { ServerResponse, IncomingMessage } from 'node:http';
import { sendJson, sendError } from '../utils.js';
import { appendLog } from '../../store/logs.js';

export async function runRoute(_req, res, body) {
  const ts = new Date().toISOString();
  const start = Date.now();
  let ok = false;
  let error = undefined;
  let agent_id = body && body.manifest;
  if (!agent_id) {
    sendError(res, 400, 'Missing agent manifest');
    await appendLog({ ts, agent_id, ms: 0, ok: false, error: 'Missing agent manifest' });
    return;
  }
  try {
    // Simulate agent run
    ok = true;
    sendJson(res, 200, { ok: true, result: `Agent run started for manifest: ${agent_id}` });
  } catch (e) {
    ok = false;
    error = e instanceof Error ? e.message : String(e);
    sendError(res, 500, error);
  } finally {
    const ms = Date.now() - start;
    await appendLog({ ts, agent_id, ms, ok, ...(error ? { error } : {}) });
  }
}
