#!/bin/bash

set -e

URL="http://localhost:4000/health"

echo "Running smoke test on $URL"

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$RESPONSE" = "200" ]; then
  echo "Smoke test passed"
  exit 0
else
  echo "Smoke test failed with response code $RESPONSE"
  exit 1
fi
