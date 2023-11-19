git stash

git switch main

npm version $1 --no-git-tag-version

rm -rf builds/

tsc 

tsc -p tsconfig.browser.json

MODULE_VERSION=$(node -p -e "require('./package.json').version")

mkdir builds/$MODULE_VERSION
mv builds/temp/browser/src builds/$MODULE_VERSION/browser
mv builds/temp/node/src builds/$MODULE_VERSION/node

rm -rf builds/temp

cp TEMPLATE_README.md builds/$MODULE_VERSION/README.md

git add .

git commit -m "Build v$MODULE_VERSION"

git tag "v$MODULE_VERSION"

rm -rf builds/

git add . 

git commit -m "Clean up v$MODULE_VERSION"

git checkout -

git stash pop

git push --tags



