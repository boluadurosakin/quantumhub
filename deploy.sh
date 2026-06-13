#!/usr/bin/env bash
# deploy.sh — build and deploy quantumhub portfolio to VPS
# Usage: ./deploy.sh [--host user@your-vps-ip]

set -euo pipefail

HOST="${1:-deploy@quantumhub.me}"
REMOTE_DIR="/var/www/quantumhub"
LOCAL_DIST="./dist"

echo "▶ Building Astro..."
npm run build

echo "▶ Syncing to ${HOST}:${REMOTE_DIR}/dist ..."
rsync -avz --delete \
  --exclude='.DS_Store' \
  "${LOCAL_DIST}/" \
  "${HOST}:${REMOTE_DIR}/dist/"

echo "▶ Reloading Nginx..."
ssh "${HOST}" "sudo nginx -t && sudo systemctl reload nginx"

echo "✓ Deployed successfully to https://quantumhub.me"
