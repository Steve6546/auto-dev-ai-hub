#!/bin/bash
set -e

ROUND_ID=$1
if [ -z "$ROUND_ID" ]; then
  echo "Usage: $0 <round-id>"
  exit 1
fi

npx ts-node scripts/run-agent.ts $ROUND_ID
