#!/usr/bin/env bash

VERSION=$1

if [ -z "$VERSION" ]; then
    VERSION=$(bash -c "node -e \"console.log(require('./package.json').version)\"")
fi

AUTHOR=$(bash -c "node -e \"console.log(require('./package.json').author)\"")

NAME=$(bash -c "node -e \"console.log(require('./package.json').name.split('/').pop())\"")

echo "$VERSION"
echo "$NAME"
echo "$AUTHOR"

docker save -o "docs/docker/${AUTHOR}_${NAME}_${VERSION}.docker" "$AUTHOR/$NAME:$VERSION"