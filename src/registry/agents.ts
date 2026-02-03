import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { DockyardError } from '../api/auth.js';

export interface AgentManifest {
  id: string;
  name: string;
  skills: string[];
  channels: string[];
}

export async function loadAgentManifest(id: string): Promise<AgentManifest> {
  const file = join(process.cwd(), 'agents', `${id}.agent.json`);
  try {
    const data = await readFile(file, 'utf8');
    return JSON.parse(data) as AgentManifest;
  } catch (err) {
    throw new DockyardError(`Agent manifest not found: ${id}`, 404);
  }
}
