# Blueclaw Dockyard Security

## API Keys
- All agent runs require a valid API key (Bearer token).
- Store API keys securely and rotate them regularly.
- Never share API keys in public or with untrusted parties.

## Least Privilege
- Only enable skills and channels that are required for your use case.
- Review all skills and channels before enabling.
- Remove or disable unused or experimental features.

## Skills
- Never add unreviewed or untrusted skills to the registry.
- Skills run with the same privileges as the main process.
- Audit skill code for side effects and security risks.

## Channels
- Webhook channels can send data to external systems. Use with caution.
- Restrict outbound network access if possible.

## Logging
- Logs may contain sensitive data. Secure log storage and access.
- Regularly review and rotate logs.

## Updates
- Keep dependencies and Node.js up to date.
- Review all code changes before deploying to production.
