# Discworld Shelf

A single-page tracker for which of Terry Pratchett's 41 Discworld novels I own
and which I'm still looking for. Friends can check it before buying a present:
**https://wanted-books.baker.sh/**

It's plain HTML and JavaScript with no build step, hosted on GitHub Pages.

## What's here

| File         | Purpose                                                              |
| ------------ | -------------------------------------------------------------------- |
| `index.html` | The page: styles, markup and script                                  |
| `books.js`   | The 41 novels in publication order, with year and sub-series         |
| `owned.js`   | Publication numbers of the books I own (generated, see below)        |
| `publish.sh` | Copies a saved `owned.js` into the repo, commits and pushes it       |
| `CNAME`      | Custom domain for GitHub Pages                                       |

## Using the page

- **Shelf** or **List** layout.
- Filter by **All**, **Owned** or **Want**, and search by title.
- Order by **publication** or group **by sub-series** (Witches, City Watch, Death, …).
- Layout and ordering choices are remembered in `localStorage`.
- Printing always gives a shopping list of the books still wanted, whatever is on screen.

## Two modes

- **Friend view (read-only):** what the hosted site shows. Owned books are
  coloured spines; wanted books are dashed outlines.
- **Edit mode:** open `index.html` straight from disk (`file://`). Click a
  book to toggle whether I own it. Changes are kept in `localStorage` and a
  banner lists what's unpublished. **Preview friend view** (adds `?view`)
  shows the read-only page locally.

## Updating the published list

1. Open `index.html` locally and tick or untick books.
2. Click **Save owned.js** in the banner. The browser saves it to `~/Downloads`.
3. Run:

   ```sh
   ./publish.sh
   ```

   It picks the newest `owned*.js` in `~/Downloads` (set `DOWNLOADS` to look
   elsewhere), shows the books added and removed, and asks before committing
   and pushing. Once handled, saved copies in Downloads are deleted so an old
   one can't be published by mistake.

The live site updates a minute or two after the push.

**Discard** in the banner throws away unpublished ticks and goes back to the
published `owned.js`.
