#!/bin/bash
set -e
# simple health check — adjust path/port to your app
# if static site, check an index.html exists
if [ ! -f /var/www/woodworks/index.html ]; then
  echo "index.html missing" >&2
  exit 1
fi
echo "validation ok"
