import { healthRoute } from './routes/health.js';
import { runRoute } from './routes/run.js';
import { logsRoute } from './routes/logs.js';
import { parseJsonBody } from './utils.js';
import { sendJson, sendError } from './utils.js';
import { requireApiKey, DockyardError } from './auth.js';
import { IncomingMessage, ServerResponse } from 'node:http';

const routes = [
  { method: 'GET', path: /^\/api\/agent\/health$/, handler: healthRoute },
  { method: 'POST', path: /^\/api\/agent\/run$/, handler: runRoute },
  { method: 'GET', path: /^\/api\/logs$/, handler: logsRoute },
];

export async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const url = req.url || '/';
  const method = req.method || 'GET';
  const route = routes.find(r => r.method === method && r.path.test(url));

  try {
    if (!route) {
      sendError(res, 404, 'Not found');
      return;
    }
    // API key check for POST /api/agent/run
    if (route.handler === runRoute) {
      try {
        requireApiKey(req);
      } catch (err) {
        if (err instanceof DockyardError) {
          sendError(res, err.status, err.message);
          return;
        }
        sendError(res, 500, 'Internal server error');
        return;
      }
    }
    // Parse JSON body for POST
    let body = undefined;
    if (method === 'POST') {
      body = await parseJsonBody(req);
      if (body === undefined) {
        sendError(res, 400, 'Invalid JSON');
        return;
      }
    }
    await route.handler(req, res, body);
  } catch (err) {
    if (err instanceof DockyardError) {
      sendError(res, err.status, err.message);
    } else {
      sendError(res, 500, 'Internal server error');
    }
  }
}
