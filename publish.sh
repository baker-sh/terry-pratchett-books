#!/usr/bin/env bash
# Publish the owned list: take the newest owned*.js saved from the page's
# "Save owned.js" button, show what changed, then commit and push to GitHub Pages.
set -euo pipefail

cd "$(dirname "$0")"
downloads="${DOWNLOADS:-$HOME/Downloads}"

# Saved lists are owned.js, owned(1).js, ... from the page; use the newest one.
saved() { grep -l '^const OWNED = \[' "$downloads"/owned*.js 2>/dev/null || true; }
new=$(saved | xargs -r -d '\n' ls -t | head -n 1)
if [[ -z $new ]]; then
  echo "No saved owned.js in $downloads. Click \"Save owned.js\" on the page first." >&2
  exit 1
fi

# Remove every saved owned*.js once handled, so an older copy can't be published later by mistake.
clear_saved() { saved | xargs -r -d '\n' rm --; }

cp "$new" owned.js
if git diff --quiet -- owned.js; then
  echo "Nothing to publish: $new matches what's already published."
  clear_saved
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
clear_saved
echo "Published. https://baker-sh.github.io/terry-pratchett-books/ updates in a minute or two."
