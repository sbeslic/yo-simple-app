#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:sbeslic/yo-simple-app.git master:gh-pages

cd -