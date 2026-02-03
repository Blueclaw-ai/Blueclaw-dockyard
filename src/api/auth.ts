export class DockyardError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'DockyardError';
  }
}

export function requireApiKey(req: { headers: any }) {
  const auth = req.headers['authorization'] || '';
  const expected = process.env.API_KEY;
  if (!expected) throw new DockyardError('API_KEY not set', 500);
  if (!auth.startsWith('Bearer ')) throw new DockyardError('Missing Bearer token', 401);
  const token = auth.slice(7);
  if (token !== expected) throw new DockyardError('Invalid API key', 401);
}
