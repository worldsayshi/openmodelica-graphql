set -e

git add .
git commit --reuse-message=HEAD
git push
ssh root@165.227.168.170 '(cd openmodelica-graphql/docker-compose && git pull && docker-compose up -d --force-recreate) ; exit'
