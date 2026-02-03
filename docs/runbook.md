# Blueclaw Dockyard Runbook

## Setup
1. Copy `.env.example` to `.env` and set `API_KEY`.
2. Build and run:
   ```bash
   npm install
   npm run build
   npm start
   ```
   Or use Docker Compose:
   ```bash
   docker compose -f docker/compose.yml up --build
   ```

## Running Agents
- Use the `/api/agent/run` endpoint with a valid manifest and API key.
- Example:
  ```bash
  curl -X POST http://localhost:8787/api/agent/run \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{"manifest":"crab-scout"}'
  ```

## Logs
- All runs are logged to `./data/logs.jsonl`.
- View last 50 logs:
  ```bash
  curl http://localhost:8787/api/logs
  ```

## Troubleshooting
- Check logs for errors.
- Ensure API key is set and correct.
- Review agent manifests and skills for typos.

## Maintenance
- Rotate API keys regularly.
- Review enabled skills and channels.
- Remove unused manifests and logs.
