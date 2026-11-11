# eScience Center Theme

This plugin applies the [eScience Center](https://www.esciencecenter.nl/) Theme to reveal.js.

The package has two parts:

- `escience_theme`: the reveal.js plugin. It adds the decorations (logo,
  overlays, flags, panes) and switches them per slide based on `data-state`.
- `escience_theme/escience.css`: the styles. The plugin does not inject CSS
  itself, so this stylesheet has to be loaded alongside it.

## Setup

Works with reveal.js 5 and 6 (peer dependency). Load reveal.js's own black
theme and monokai highlight theme first, then the eScience styles.

reveal.js 6:

```js
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Escience from 'escience_theme';

import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import 'escience_theme/escience.css';

new Reveal({ plugins: [Highlight, Escience] }).initialize();
```

reveal.js 5 uses different paths for the same files:

```js
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
```

The CSS imports assume a bundler (Vite, webpack). Without one, use
`<link rel="stylesheet">` tags in the same order.

## Slide states

Set the look of a slide with `data-state`, e.g. in reveal.js markdown:

```markdown
<!-- .slide: data-state="standard" -->
```

`data-state` is a space-separated list of words. Presets: `standard`,
`title`, `two_pane`, `about`, `keepintouch` (or `touch`). Single decorations
can be combined freely with them and with each other: `white_overlay`,
`blue_overlay`, `purple_overlay`, `black_overlay`, `logo`, `yellow_flag`,
`yellow_strip`, `blue_pane_left`, `blue_pane_right`, `touch_pane`,
`purple_half_circle_top`, `purple_half_circle_bottom`, `purple_strip_bottom`,
`yellow_half_strip`, `purple_blob`, `right_e_top`, `right_e_bottom`, and
`clear_background` (moves overlays and panes away, e.g. for an interactive
background iframe). A slide without `data-state` shows no decorations.

A `<footer>` element in a slide is shown in a blue strip at the bottom right.

A number from 0 to 10 sets the overlay opacity in tenths: `standard 6` lets a
background image show through, `standard 10` is opaque. Without a number the
overlay is opaque, unless the slide has a background image, video or iframe
(`data-background-image`, `-video`, `-iframe`); then it is 0.8, so the
background stays faintly visible.

## Layout classes

For use inside slides, e.g. as HTML in reveal.js markdown.

**`.columns`** lays its children out in a grid: two equal columns by default,
or any `grid-template-columns` value in `--columns`. Further children wrap
into new rows; `--gap` sets the gap. reveal.js's own `.items-center`,
`.items-start` etc. align the columns vertically.

```html
<div class="columns items-center" style="--columns: 7fr 3fr">
  <div>text</div>
  <img src="photo.jpg">
</div>
```

**`.card`** is a padded light-gray box with dark text. `.card.bordered` has a
border only and keeps the slide's colours; `.card.highlight` has a blue
border. A card inside a filled card is white.

**`.stepper`** shows steps one by one. Its `.step` elements are the steps: the
first one plain, the later ones fragments. The current step (the last one
shown; the plugin marks it with `.current-step`) gets a blue border if it has
a border, e.g. as `.step.card`, and only
its `.detail` is displayed: the `.detail` right after the step, or one inside
it. `.stepper.preview` shows upcoming steps faded instead of hidden.
`--columns` and `--gap` on the stepper apply to its `.columns` rows.

```html
<div class="stepper" style="--columns: 7em repeat(2, 1fr)">
  <div class="step card columns"><strong>Create</strong><span>Generate</span><span>Summarize</span></div>
  <div class="detail columns"><em>e.g.</em><span>Text, code</span><span>Papers</span></div>
  <div class="step card columns fragment"><strong>Find</strong><span>Search</span><span>Predict</span></div>
  <div class="detail columns"><em>e.g.</em><span>Documents</span><span>Outcomes</span></div>
</div>
```

## Printing

Decks print with reveal.js's print view (`?print-pdf` in the URL, then print
to PDF from the browser). Every page gets the decorations of its own slide.
The overview (Esc) shows every slide with its decorations as well.

## Development

```sh
npm install
npm test
```

`npm test` renders `test/fixture/deck.html` in Chromium (`CHROME` overrides
the executable), screenshots every slide and overview mode, and compares them
with the theme at `BASELINE_REF` (default `v0.2.0`; a revision before 0.2.0,
such as `1ef0fd0`, loads the old single-file plugin). Each slide must match
pixel by pixel, and the computed typography (font, weight, style, text
transform) of every element on it must match too, as must that of the speaker
notes panel.
Screenshots and diffs land in `test/output/`. Set `MAX_DIFF` to allow a number
of differing pixels per screenshot.

Every stepper is walked fragment by fragment (exactly the last shown step is
current, only its details are displayed), and in the overview every thumbnail
must carry its slide's decorations, removed again when the overview closes.
A second pass opens the deck in print view and checks that every page shows
the decorations, logo, link colours and background classes its slide shows on
screen, and that no decoration covers the slide's heading.

Fixture slides can declare what they expect from the current theme:
`data-expect-opacity` (overlay opacity), `data-expect-selection` (text
selection colours), `data-fonts-differ` (elements whose typography may differ
from the baseline) and `data-baseline-differs` (left out of both comparisons because the slide
changes on purpose). `data-overview-differs` on `.reveal` leaves the overview
screenshot out of the pixel comparison.

## License

Apache-2.0 licensed

Copyright (C) 2023 The Netherlands eScience Center
