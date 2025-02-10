# eScience Center Theme

This plugin applies the [eScience Center](https://www.esciencecenter.nl/) Theme to reveal.js.

## Setup

You can use the plugin as an ES module:

```html
<script type="module">
  import Reveal from './dist/reveal.esm.js';
  import Escience from './plugin/escience/escience_5.1.0.esm.js';

  Reveal.initialize({
    // ...
    plugins: [ Escience ],
    // ...
  });
</script>
```

## License

Apache-2.0 licensed

Copyright (C) 2023 The Netherlands eScience Center
