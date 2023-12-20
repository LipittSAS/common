git stash

git switch main

npm version $1 --no-git-tag-version

rm -rf builds/
rm -rf node/
rm -rf browser/

tsc 

tsc -p tsconfig.browser.json

mv builds/node/src node
mv builds/browser/src browser

rm -rf builds/

MODULE_VERSION=$(node -p -e "require('./package.json').version")

git add .

git commit -m "Build v$MODULE_VERSION"

git tag "v$MODULE_VERSION"

git push origin main 

git push --tags

npm publish --access public

rm -rf node/
rm -rf browser/

git add . 

git commit -m "Clean up v$MODULE_VERSION"

git checkout -

git stash pop

git push origin main 

git push --tags



