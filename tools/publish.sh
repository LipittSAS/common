git stash

git switch main

npm version $1 --no-git-tag-version

rm -rf node/
rm -rf browser/

tsc 

tsc -p tsconfig.browser.json

MODULE_VERSION=$(node -p -e "require('./package.json').version")

git add .

git commit -m "Build v$MODULE_VERSION"

git tag "v$MODULE_VERSION"

npm publish --access public

rm -rf node/
rm -rf browser/

git add . 

git commit -m "Clean up v$MODULE_VERSION"

git checkout -

git stash pop

git push origin main 

git push --tags



