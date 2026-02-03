# Blueclaw Dockyard Overview

Blueclaw Dockyard is a minimal, production-lean TypeScript runtime for agent execution. It supports skill chaining, channel dispatch, and persistent logging, all via a simple HTTP API.

## Key Concepts
- **Agent**: Defined by a manifest, lists skills and output channels.
- **Skill**: Pure function, runs in strict order, merges state forward.
- **Channel**: Output target (e.g., stdout, webhook).
- **Log**: All runs are logged as JSONL for audit and debugging.

## API Endpoints
- `GET /api/agent/health`: Health check.
- `POST /api/agent/run`: Run agent by manifest (API key required).
- `GET /api/logs`: Last 50 run logs.

## Security
- API key required for agent runs.
- Only reviewed skills should be enabled.
- Channels must be explicitly listed in agent manifests.

## Extending
- Add new skills or channels by implementing the required interface and updating the registry.
- Never add unreviewed or untrusted code to skills or channels.

See `docs/security.md` for more.
