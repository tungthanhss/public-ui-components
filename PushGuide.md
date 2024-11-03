lerna publish --no-push --force-publish --no-git-tag-version --registry http://10.1.125.122:4873


pnpm config set registry http:/e32/10.1.125.122:4873


pnpm --stream -r publish  --no-git-checks --access public


pnpm --silent lerna version --conventional-commits --yes --force-git-tag --force-publish
