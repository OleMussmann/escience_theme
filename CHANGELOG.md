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

### Removed

- The `dim`, `dim_3` and `dim_8` states, which darkened slide background
  media. No known deck uses them; the overlay opacity number in
  `data-state` (e.g. `standard 6`) covers background media. Slide
  backgrounds no longer carry a CSS `filter`.

### Tests

- The screenshot test compares against `v0.2.0` by default and also checks
  the computed typography of every slide element and of the speaker notes.
