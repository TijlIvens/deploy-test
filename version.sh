#!/bin/bash

VERSION="$(grep 'version' package.json | head -n 1 | cut -d '"' -f4 | tr -d '[[:space:]]')"

echo $VERSION

cd packages/package1

yarn publish --new-version $VERSION --no-git-tag-version --no-commit-hooks

cd ..
cd project1

yarn version --new-version $VERSION --no-git-tag-version --no-commit-hooks
yarn add @tijlivens/package1@^$VERSION

cd ..
cd project2

yarn version --new-version $VERSION --no-git-tag-version --no-commit-hooks
yarn add @tijlivens/package1@^$VERSION