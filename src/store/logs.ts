import { mkdir, appendFile, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const LOG_STORE = process.env.LOG_STORE || './data/logs.jsonl';

async function ensureDirExists(path: string) {
  const dir = dirname(path);
  await mkdir(dir, { recursive: true });
}

export async function appendLog(entry: Record<string, any>) {
  const path = resolve(LOG_STORE);
  await ensureDirExists(path);
  await appendFile(path, JSON.stringify(entry) + '\n', 'utf8');
}

export async function readLastLogs(count = 50): Promise<any[]> {
  const path = resolve(LOG_STORE);
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter(Boolean);
    return lines.slice(-count).map(line => {
      try { return JSON.parse(line); } catch { return null; }
    }).filter(Boolean);
  } catch {
    return [];
  }
}
