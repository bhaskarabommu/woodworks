#!/bin/bash
set -e
# example: run deploy script (adapt if your deploy script uses sudo or different user)
cd /var/www/woodworks
./deploy.sh > /tmp/woodworks-deploy.log 2>&1 &
