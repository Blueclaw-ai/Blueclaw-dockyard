import { stdoutChannel } from '../channels/stdout.js';
import { webhookChannel } from '../channels/webhook.js';

export async function resolveChannel(id: string) {
  if (id === 'stdout') return stdoutChannel;
  if (id === 'webhook') return webhookChannel;
  throw new Error(`Unknown channel: ${id}`);
}
