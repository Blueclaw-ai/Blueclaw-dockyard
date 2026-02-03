#!/bin/sh
curl -sf http://localhost:8787/api/agent/health | grep '"ok":true' > /dev/null
exit $?
