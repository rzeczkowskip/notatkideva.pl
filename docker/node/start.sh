#!/bin/bash
set -e

if [ "$DOCKER_START_NO_INSTALL" != 1 ]; then
  yarn install || exit $?
fi

if [ "$NODE_ENV" = 'production' ]; then
  exec yarn build
else
  dev_server_options=(--host 0.0.0.0 --disable-host-check)

  if [ ! -z "$DEV_SERVER_PUBLIC" ]; then
    dev_server_options+=(--public $DEV_SERVER_PUBLIC)
  fi

  exec yarn run dev-server ${dev_server_options[@]}
fi
