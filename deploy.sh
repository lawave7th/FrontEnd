#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://shannon945: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@github.com/lawave7th/FrontEnd.git master:gh-pages

cd -
