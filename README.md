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

Presets: `standard`, `title`, `two_pane`, `about`, `keepintouch`. Single
decorations (`white_overlay`, `blue_overlay`, `purple_overlay`,
`black_overlay`, `logo`, `yellow_flag`, …) can be combined freely.

A number from 0 to 10 sets the overlay opacity in tenths: `standard 6` lets a
background image show through, `standard 10` is opaque. Without a number the
overlay is opaque, unless the slide has a background image, video or iframe
(`data-background-image`, `-video`, `-iframe`); then it is 0.8, so the
background stays faintly visible.

## Development

```sh
npm install
npm test
```

`npm test` renders `test/fixture/deck.html` in Chromium (`CHROME` overrides
the executable), screenshots every slide and overview mode, and compares them
pixel by pixel with the theme at `BASELINE_REF` (default `1ef0fd0`, the last
single-file version). Screenshots and diffs land in `test/output/`. Set
`MAX_DIFF` to allow a number of differing pixels per screenshot, e.g. when a
change is intentional.

## License

Apache-2.0 licensed

Copyright (C) 2023 The Netherlands eScience Center
