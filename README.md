```
🦞 blueclaw-dockyard

Minimal TypeScript runtime for Blueclaw agents:
- skills chaining
- channel dispatch
- logs
- HTTP API

## Quickstart
```bash
cp .env.example .env
npm i
npm run dev
```

## Demo

### Health
```bash
curl -s http://localhost:3000/api/agent/health
```

### Run crab-scout
```bash
curl -s -X POST http://localhost:3000/api/agent/run \
	-H "Authorization: Bearer $API_KEY" \
	-H "Content-Type: application/json" \
	-d '{"manifest":"crab-scout"}'
```

### Logs
```bash
curl -s http://localhost:3000/api/logs
```
