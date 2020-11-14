set -e

git add .
git commit --reuse-message=HEAD
git push
source deploy.sh
