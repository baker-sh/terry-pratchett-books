#!/usr/bin/env bash
# Publish the owned list: take the newest owned*.js saved from the page's
# "Save owned.js" button, show what changed, then commit and push to GitHub Pages.
set -euo pipefail

cd "$(dirname "$0")"
downloads="${DOWNLOADS:-$HOME/Downloads}"

new=$(ls -t "$downloads"/owned*.js 2>/dev/null | head -n 1 || true)
if [[ -z $new ]]; then
  echo "No owned*.js in $downloads. Click \"Save owned.js\" on the page first." >&2
  exit 1
fi
if ! grep -q '^const OWNED = \[' "$new"; then
  echo "$new doesn't look like a saved owned.js." >&2
  exit 1
fi

cp "$new" owned.js
if git diff --quiet -- owned.js; then
  echo "Nothing to publish: $new matches what's already published."
  rm "$new"
  exit 0
fi

# Lines look like "  20, // Hogfather"; turn the diff into "+ Hogfather" / "- Mort".
changes=$(git diff -U0 -- owned.js | sed -nE 's#^([+-]) *[0-9]+, *// *(.*)$#\1 \2#p')
echo "Changes from $new:"
sed 's/^/  /' <<<"$changes"

read -rp "Publish? [Y/n] " answer
if [[ ! ${answer:-y} =~ ^[Yy] ]]; then
  git checkout -- owned.js
  echo "Cancelled. Nothing published."
  exit 1
fi

git add owned.js
git commit -q -m "Update owned books" -m "$changes"
git push -q
rm "$new"
echo "Published. https://baker-sh.github.io/terry-pratchett-books/ updates in a minute or two."
