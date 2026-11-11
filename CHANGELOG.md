# Changelog

## Unreleased (0.3.0)

### Changed

- Fonts are set through reveal.js's theme variables (`--r-main-font`,
  `--r-heading-font`, `--r-code-font`, `--r-heading-font-weight`,
  `--r-heading-text-transform`) instead of `!important` rules on `p`, `div`,
  `ul` and headings. Slide content can now set font and weight with plain
  CSS; before, `font-weight: 400 !important` on every `div` overrode any
  weight set by content. Headings fall back to `sans-serif`, and `<pre>`
  blocks use Fira Code like the `<code>` inside them.
- Text selection is white on purple. The previous `::selection` rules were
  less specific than reveal.js's and never applied, so selections showed
  reveal's light blue.
- Vendor prefixes for `transition` are dropped.
- Decorations are styled in `escience.css`. `escience.js` sets `data-show`,
  `data-logo` and `--escience-overlay-opacity` on an `.escience-decorations`
  root and no longer writes inline styles; element names carry an
  `escience-` prefix instead of global ids such as `#footer`, which clashed
  with NEBULA's page footer.
- `data-state` is read as a list of words. The words and presets are the
  same, but a word no longer matches inside another one, apart from
  `keepintouch`, which stays an alias of `touch`.
- Every slide's decorations, logo variant, link colours and background
  classes follow from its own `data-state` alone. Before, anything a slide
  did not set explicitly (and everything on a slide without `data-state`)
  carried over from the previously shown slide. A slide without
  `data-state` now shows no decorations.
- Link colours are set per slide (`data-escience-links` on the slide)
  instead of globally on `:root`.
- Links in the footer strip are white, purple on hover; before they took
  the slide's link colour, which is blue on white slides and invisible on
  the blue strip.
- The purple blob is a single element with two pseudo-elements instead of
  three nested boxes; the concave curve between its two drops is
  anti-aliased like the other edges.
- The default export is a plugin factory; reveal.js calls it once per deck.
  `plugins: [Escience]` works as before. The plugin has a `destroy()`.

### Fixed

- Print view (`?print-pdf`): every page shows the decorations of its own
  slide, with the slide content above them. Before, only the first page was
  decorated, and the decorations covered its content.

### Removed

- The `dim`, `dim_3` and `dim_8` states, which darkened slide background
  media. No known deck uses them; the overlay opacity number in
  `data-state` (e.g. `standard 6`) covers background media. Slide
  backgrounds no longer carry a CSS `filter`.

### Tests

- The screenshot test compares against `v0.2.0` by default and also checks
  the computed typography of every slide element and of the speaker notes.
- A print pass checks every page of the print view against its slide on
  screen.
- Screenshots are taken without the speaker notes panel, which covered the
  right third of every slide; the notes' typography is checked separately.
  `data-overview-max-diff` on `.reveal` allows a number of differing pixels
  in the overview screenshot.
