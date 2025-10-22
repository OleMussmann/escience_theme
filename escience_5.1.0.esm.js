let Escience = {
  id: 'Escience',
  init: (deck) => {
    initDecorations(deck)
  }
}

export default Escience;

const black_css = `
/**
 * Black theme for reveal.js. This is the opposite of the 'white' theme.
 *
 * By Hakim El Hattab, http://hakim.se
 */

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-regular.eot');
    src: url('./source-sans-pro-regular.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-regular.woff') format('woff'),
         url('./source-sans-pro-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-italic.eot');
    src: url('./source-sans-pro-italic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-italic.woff') format('woff'),
         url('./source-sans-pro-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibold.eot');
    src: url('./source-sans-pro-semibold.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibold.woff') format('woff'),
         url('./source-sans-pro-semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibolditalic.eot');
    src: url('./source-sans-pro-semibolditalic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibolditalic.woff') format('woff'),
         url('./source-sans-pro-semibolditalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

section.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {
  color: #222;
}

/*********************************************
 * GLOBAL STYLES
 *********************************************/
:root {
  --r-background-color: #191919;
  --r-main-font: Source Sans Pro, Helvetica, sans-serif;
  --r-main-font-size: 42px;
  --r-main-color: #fff;
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;
  --r-heading-font: Source Sans Pro, Helvetica, sans-serif;
  --r-heading-color: #fff;
  --r-heading-line-height: 1.2;
  --r-heading-letter-spacing: normal;
  --r-heading-text-transform: uppercase;
  --r-heading-text-shadow: none;
  --r-heading-font-weight: 600;
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-code-font: monospace;
  --r-link-color: #42affa;
  --r-link-color-dark: #068de9;
  --r-link-color-hover: #8dcffc;
  --r-selection-background-color: rgba(66, 175, 250, 0.75);
  --r-selection-color: #fff;
  --r-overlay-element-bg-color: 240, 240, 240;
  --r-overlay-element-fg-color: 0, 0, 0;
}

.reveal-viewport {
  background: #191919;
  background-color: var(--r-background-color);
}

.reveal {
  font-family: var(--r-main-font);
  font-size: var(--r-main-font-size);
  font-weight: normal;
  color: var(--r-main-color);
}

.reveal ::selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal ::-moz-selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.3;
  font-weight: inherit;
}

/*********************************************
 * HEADERS
 *********************************************/
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  margin: var(--r-heading-margin);
  color: var(--r-heading-color);
  font-family: var(--r-heading-font);
  font-weight: var(--r-heading-font-weight);
  line-height: var(--r-heading-line-height);
  letter-spacing: var(--r-heading-letter-spacing);
  text-transform: var(--r-heading-text-transform);
  text-shadow: var(--r-heading-text-shadow);
  word-wrap: break-word;
}

.reveal h1 {
  font-size: var(--r-heading1-size);
}

.reveal h2 {
  font-size: var(--r-heading2-size);
}

.reveal h3 {
  font-size: var(--r-heading3-size);
}

.reveal h4 {
  font-size: var(--r-heading4-size);
}

.reveal h1 {
  text-shadow: var(--r-heading1-text-shadow);
}

/*********************************************
 * OTHER
 *********************************************/
.reveal p {
  margin: var(--r-block-margin) 0;
  line-height: 1.3;
}

/* Remove trailing margins after titles */
.reveal h1:last-child,
.reveal h2:last-child,
.reveal h3:last-child,
.reveal h4:last-child,
.reveal h5:last-child,
.reveal h6:last-child {
  margin-bottom: 0;
}

/* Ensure certain elements are never larger than the slide itself */
.reveal img,
.reveal video,
.reveal iframe {
  max-width: 95%;
  max-height: 95%;
}

.reveal strong,
.reveal b {
  font-weight: bold;
}

.reveal em {
  font-style: italic;
}

.reveal ol,
.reveal dl,
.reveal ul {
  display: inline-block;
  text-align: left;
  margin: 0 0 0 1em;
}

.reveal ol {
  list-style-type: decimal;
}

.reveal ul {
  list-style-type: disc;
}

.reveal ul ul {
  list-style-type: square;
}

.reveal ul ul ul {
  list-style-type: circle;
}

.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul {
  display: block;
  margin-left: 40px;
}

.reveal dt {
  font-weight: bold;
}

.reveal dd {
  margin-left: 40px;
}

.reveal blockquote {
  display: block;
  position: relative;
  width: 70%;
  margin: var(--r-block-margin) auto;
  padding: 5px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.reveal blockquote p:first-child,
.reveal blockquote p:last-child {
  display: inline-block;
}

.reveal q {
  font-style: italic;
}

.reveal pre {
  display: block;
  position: relative;
  width: 90%;
  margin: var(--r-block-margin) auto;
  text-align: left;
  font-size: 0.55em;
  font-family: var(--r-code-font);
  line-height: 1.2em;
  word-wrap: break-word;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.reveal code {
  font-family: var(--r-code-font);
  text-transform: none;
  tab-size: 2;
}

.reveal pre code {
  display: block;
  padding: 5px;
  overflow: auto;
  max-height: 400px;
  word-wrap: normal;
}

.reveal .code-wrapper {
  white-space: normal;
}

.reveal .code-wrapper code {
  white-space: pre;
}

.reveal table {
  margin: auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.reveal table th {
  font-weight: bold;
}

.reveal table th,
.reveal table td {
  text-align: left;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-bottom: 1px solid;
}

.reveal table th[align=center],
.reveal table td[align=center] {
  text-align: center;
}

.reveal table th[align=right],
.reveal table td[align=right] {
  text-align: right;
}

.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td {
  border-bottom: none;
}

.reveal sup {
  vertical-align: super;
  font-size: smaller;
}

.reveal sub {
  vertical-align: sub;
  font-size: smaller;
}

.reveal small {
  display: inline-block;
  font-size: 0.6em;
  line-height: 1.2em;
  vertical-align: top;
}

.reveal small * {
  vertical-align: top;
}

.reveal img {
  margin: var(--r-block-margin) 0;
}

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--r-link-color);
  text-decoration: none;
  transition: color 0.15s ease;
}

.reveal a:hover {
  color: var(--r-link-color-hover);
  text-shadow: none;
  border: none;
}

.reveal .roll span:after {
  color: #fff;
  background: var(--r-link-color-dark);
}

/*********************************************
 * Frame helper
 *********************************************/
.reveal .r-frame {
  border: 4px solid var(--r-main-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.reveal a .r-frame {
  transition: all 0.15s linear;
}

.reveal a:hover .r-frame {
  border-color: var(--r-link-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
}

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--r-link-color);
}

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--r-link-color);
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--r-background-color);
  }
}
`;

const monokai_css = `
/*
Monokai style - ported by Luigi Maselli - http://grigio.org
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #272822;
  color: #ddd;
}

.hljs-tag,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-strong,
.hljs-name {
  color: #f92672;
}

.hljs-code {
  color: #66d9ef;
}

.hljs-class .hljs-title {
  color: white;
}

.hljs-attribute,
.hljs-symbol,
.hljs-regexp,
.hljs-link {
  color: #bf79db;
}

.hljs-string,
.hljs-bullet,
.hljs-subst,
.hljs-title,
.hljs-section,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #a6e22e;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-selector-id {
  font-weight: bold;
}
`;

const escience_css = `
/*********************************************
 * COLORS
 *********************************************/

:root {
  --nlesc-blue: #009DDD;
  --nlesc-purple: #380339;
  --nlesc-yellow: #FFB213;
  --light-gray: #D8D8D8;
  --dark-gray: #2b2b2b;
  --gray-transparent: rgba(128, 128, 128, .5);

  --link-color: var(--nlesc-purple);
  --link-color-hover: var(--nlesc-yellow);

}

/*********************************************
 * GLOBAL STYLES
 *********************************************/

p, div, ul {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 400 !important;
  font-style: normal;
}

h1, h2, h3 {
  font-family: "Nunito" !important;
  font-weight: 700 !important;
}

h4, h5 {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 700 !important;
  font-style: normal;
}

code {
  font-family: "Fira Code", monospace !important;
  font-optical-sizing: auto !important;
  font-weight: 500;
  font-style: normal;
  background-color: var(--gray-transparent);
}

.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  text-transform: none;
}

.reveal {
  font-size: 36px; }  /* make stuff smaller */

::selection {
  color: #0f0;
  background: var(--nlesc-purple);
  text-shadow: none; }

::-moz-selection {
  color: #fff;
  background: var(--nlesc-purple);
  text-shadow: none; }


/*********************************************
 * CUSTOM COLORS
 *********************************************/
.primary { color: var(--nlesc-blue) !important; }
.secondary { color: var(--nlesc-purple) !important; }
.tertiary { color: var(--light-gray) !important; }

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--link-color); }

.reveal a:hover {
  color: var(--link-color-hover); }

.reveal .roll span:after {
  color: #fff;
  background: var(--nlesc-blue); }

/*********************************************
 * IMAGES
 *********************************************/
.reveal section img { /* undo stupid img frames */
  background: none;
  border: none;
  box-shadow: none;
}

.reveal a:hover img {
  border-color: var(--nlesc-blue); }

/*********************************************
 * HIGHLIGHT COLORS
 *********************************************/

.reveal .slides section .fragment.highlight-blue.visible {
  color: var(--nlesc-blue); }

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--nlesc-yellow); }

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--nlesc-yellow); }

.reveal .progress span {
  background: var(--nlesc-yellow);
  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }

/*********************************************
 * FOOTER
 *********************************************/

.slides .footer {
  font-size: x-small !important;
  width: 100%;
  clear: both;
/*  padding: 50px 0 0 0;*/
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--dark-gray); } }

/*********************************************
 * DIM BACKGROUND PICTURES
 *********************************************/
.dim .backgrounds {
	-webkit-filter: brightness(.4) !important;
	-moz-filter: brightness(.4) !important;
	-o-filter: brightness(.4) !important;
	-ms-filter: brightness(.4) !important;
	filter: brightness(.4) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_3 .backgrounds {
	-webkit-filter: brightness(.3) !important;
	-moz-filter: brightness(.3) !important;
	-o-filter: brightness(.3) !important;
	-ms-filter: brightness(.3) !important;
	filter: brightness(.3) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_8 .backgrounds {
	-webkit-filter: brightness(.8) !important;
	-moz-filter: brightness(.8) !important;
	-o-filter: brightness(.8) !important;
	-ms-filter: brightness(.8) !important;
	filter: brightness(.8) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.backgrounds {
	-webkit-filter: brightness(1) !important;
	-moz-filter: brightness(1) !important;
	-o-filter: brightness(1) !important;
	-ms-filter: brightness(1) !important;
	filter: brightness(1) !important;
  -webkit-transition: -webkit-filter 1s linear;
  transition: filter 1s linear;
}

/*********************************************
 * ALLOW FOR DECORATIONS
 *********************************************/
.slides {
	/* puts the slide content above overlays and decorations*/
	z-index: 10 !important;
}

.speaker-notes {
	/* puts the slide content above overlays and decorations*/
	z-index: 3 !important;
}

footer {
	display: none !important;
}
`;

// TODO: Refactor this quick hack into a Reveal plugin form (it works at least)
const initDecorations = function(Reveal) {

if (!document.getElementById('fonts'))
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = 'fonts';
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Fira+Code:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap';
  link.media = 'all';
  head.appendChild(link);
}

if (!document.getElementById('icons'))
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = 'icons';
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.media = 'all';
  head.appendChild(link);
}

const decoration_elements = `
<div id="blue_pane_left" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 0; right: 50%; bottom: 0; top: 0; z-index: 2;"></div>
<div id="blue_pane_right" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 50%; right: 0; bottom: 0; top: 0; z-index: 2;"></div>
<div id="touch_pane" style="background-color: white; transition: opacity 1s; opacity: 0; position: absolute; left: 0; right: 66.6%; bottom: 0; top: 0; display: flex; align-items: center; justify-content: center; z-index: 2;">
  <h1 style="color: black; text-align: left;">Let's stay<br>in touch</h1>
</div>
<div id="purple_half_circle_top" style="transition: top 1s; opacity: 1; position: absolute; background-color: var(--nlesc-purple); left: 0; top: -17vw; width: 34vw; height: 17vw; border-radius: 0 0 20vw 20vw; z-index: 2;"></div>
<div id="yellow_half_strip" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-yellow); right: 50%; bottom: -25vw; width: 17vw; height: 25vw; border-radius: 20vw 0 0 0; z-index: 2;"></div>
<div id="purple_strip_bottom" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-purple); right: calc(50% + 17vw); bottom: -10vw; width: 16vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2;"></div>
<div id="logo_color" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132" />
</svg>
</div>
<div id="logo_part_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   inkscape:version="1.0.2 (1.0.2+r75+1)"
    style="width: 12vw;">
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div id="logo_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;"
>
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="72.270471"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div id="purple_overlay" style="background-color: var(--nlesc-purple); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="blue_overlay" style="background-color: var(--nlesc-blue); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="white_overlay" style="background-color: white; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="black_overlay" style="background-color: black; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="yellow_strip" style="background-color: var(--nlesc-yellow); transition: left 1s; width: 10vw; height: 70vh; border-radius: 10vw 10vw 0 0; z-index: 2; position: absolute; left: -10vw; bottom: 0;">
</div>
<div id="yellow_flag" style="background-color: var(--nlesc-yellow); transition: left 1s, bottom 1s; width: 10vh; height: 12vh; border-radius: 0 6vh 6vh 0; z-index: 3; position: absolute; left: -10vh; bottom: 5vh; margin: 0; padding: 0;">
  <svg id="left_e" style="position: absolute; height: 10vh; margin: 1vh 0; padding: 0;" viewBox="0 0 27 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <polygon id="path-1" points="0 0.132265672 26.8359 0.132265672 26.8359 33.3422209 0 33.3422209"></polygon>
        <polygon id="path-3" points="0 0.662473134 25.2148 0.662473134 25.2148 18.629294 0 18.629294"></polygon>
    </defs>
    <g id="Partners" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(0.000000, -50.000000)" id="Group-9">
            <g>
                <g id="Group-8" transform="translate(0.000000, 50.000000)">
                    <g id="Group-4">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="Clip-3"></g>
                        <path d="M25.8379,19.6216388 C25.1719,16.4541313 23.6349,13.3403403 21.2269,10.2776239 C18.5659,6.7913403 15.1599,4.20854925 11.0009,2.53365373 C7.5639,1.15375821 3.8919,0.372668657 -0.0001,0.132265672 L-0.0001,10.882594 C1.1639,11.0155642 2.2549,11.2233851 3.2109,11.5571313 C4.8269,12.1295194 6.1779,12.9123701 7.2589,13.9109672 C9.8369,16.3308478 11.1659,19.5696836 11.2539,23.6230716 L-0.0001,23.6230716 L-0.0001,33.3422209 L26.7129,33.3422209 L26.8359,33.3422209 L26.8359,29.6058478 C26.8359,26.1195642 26.5019,22.7917881 25.8379,19.6216388" id="Fill-2" fill="#FFFFFF" mask="url(#mask-2)"></path>
                    </g>
                    <g id="Group-7" transform="translate(0.000000, 39.626866)">
                        <mask id="mask-4" fill="white">
                            <use xlink:href="#path-3"></use>
                        </mask>
                        <g id="Clip-6"></g>
                        <path d="M7.1368,5.35693582 C5.9718,6.35729403 4.6648,7.05032388 3.2108,7.44042836 C2.3088,7.68259254 1.2008,7.82260746 -0.0002,7.91683134 L-0.0002,18.629294 C3.4078,18.4611 6.7038,17.8948761 9.8788,16.8918761 C13.6988,15.683697 16.9898,13.6882642 19.7308,10.9099806 C20.9788,9.63223433 22.1618,8.01017463 23.2818,6.05172687 C24.4028,4.0932791 25.0488,2.29774179 25.2148,0.662473134 L10.2548,0.662473134 C9.6728,2.50996567 8.6328,4.07566716 7.1368,5.35693582" id="Fill-5" fill="#FFFFFF" mask="url(#mask-4)"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</div>
<div id="purple_half_circle_bottom" style="transition: bottom 1s; background-color: var(--nlesc-purple); width: 20vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2; position: absolute; left: 0; bottom: -10vw;">
<svg id="left_e"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="position: absolute; bottom: 2vw; left: 6vw; width: 8vw;">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>

</div>
<div id="purple_blob" style="transition: top 1s; position: absolute; display: flex; right: 0; top: -50vh; z-index: 2;">
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 25vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 50vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div class="box" style="background: var(--nlesc-purple); position: absolute; right: 10vw; top: 0; width: 5vw; height: calc(25vh + 5vw); border-corner-shape: scoop; background: yellow; background: linear-gradient(45deg,  transparent 10vw, var(--nlesc-purple) 0) bottom left; background-image: radial-gradient(circle at 0 100%, rgba(204,0,0,0) 5vw, var(--nlesc-purple) 15px)">
  </div>
</div>
<div id="blue_strip" style="background-color: var(--nlesc-blue); transition: left 1s, right 1s; margin: 0; padding: 0; border-radius: 20vw 0 0 0; z-index: 2; position: absolute; right: -100vw; bottom: 0;">
  <div id="footer" style="text-align: right; line-height: 130%; padding: 0; margin: 1vw 1vw 1vw 3vw; bottom: 0; right: 0;">
  </div>
</div>
<svg id="right_e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.549 662.141"  style="transition: right 1s, top 1s; position: absolute; top: 10vh; right: -4vw; width: 4vw; z-index: 3;">
  <path id="Path_88" data-name="Path 88" d="M342.892,527.031q17.52-21.911,45.055-35.264a133.418,133.418,0,0,1,36-11.063V357.814c-33.264,2.515-63.486,9.336-90.408,20.725q-52.012,21.874-88.269,58.407-47.551,46.277-70.694,111.421-23.2,65.132-23.177,141.8,0,77.95,25.652,142.459Q202.723,897.2,251.563,943.4a314.339,314.339,0,0,0,88.213,56.587q37.073,15.944,84.176,19.965V896.642a104.455,104.455,0,0,1-25.345-8.657,178.837,178.837,0,0,1-40.683-27.369Q334.157,838.7,322.27,805.822a202.364,202.364,0,0,1-11.888-69.4h113.57V625.625H309.123q1.256-31.6,8.759-54.767Q325.384,547.762,342.892,527.031Z" transform="translate(-151.403 -357.814)" fill="#fff"/>
</svg>
`;

function insertCss(css) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  document.head.appendChild(style);
}

function insertDecoration() {
  if ( window.location.search.match( /print-pdf/gi ) ) {
    const backgrounds = document.getElementsByClassName('slide-background');
    for (let i = 0; i < backgrounds.length; i++) {
      backgrounds[i].insertAdjacentHTML("afterbegin", decoration_elements);
    };
  } else {
    // for viewing slides
    const reveal_div = document.querySelectorAll('div.reveal');
    // TODO better do this loop with "forEach"
    for (let i = 0; i < reveal_div.length; i++) {
      reveal_div[i].insertAdjacentHTML("afterbegin", decoration_elements);
    };
    //$('#decoration').remove(); // without this the fadeIn/fadeOut below does not work. why is this necessary?
  };
  addDecorations();
}

Reveal.on( 'ready', event => {
  insertCss(black_css);
  insertCss(monokai_css);
  insertCss(escience_css);
  insertDecoration();

  /* set events only after reveal is ready */
  Reveal.on( 'slidechanged', event => {
    if (overview_shown == false)
    {
      console.log("slide changed");
      addDecorations();
    }
  });
  Reveal.on( 'overviewshown', event => {
    overview_shown = true;
    removeDecorations();
  });
  Reveal.on( 'overviewhidden', event => {
    overview_shown = false;
    addDecorations();
  });
} );


function setLogoStyle(style) {
  //style must be one of {"logo_color","logo_white","logo_part_white"}

  //unset everything
  document.getElementById("logo_color").style.opacity = 0;
  document.getElementById("logo_white").style.opacity = 0;
  document.getElementById("logo_part_white").style.opacity = 0;

  //set only what we want
  document.getElementById(style).style.opacity = 1;
};
var overview_shown = false;
function getOpacity(data_state) {
  var opacity = 0.8;
  for (let i = 0; i < 11; i++) {
    if (data_state.includes(i)) { opacity = i/10; console.log("opacity set to " + opacity)}
  };
  return opacity
};
function addDecorations() {
  console.log("set decorations")
  let root = document.documentElement;


  var currentSlide = Reveal.getCurrentSlide();
  if (currentSlide.contains(currentSlide.querySelector('footer')))
  {
    document.getElementById("footer").innerHTML = currentSlide.querySelector('footer').innerHTML;
    document.getElementById("blue_strip").style.right = 0;
    console.log("footer (and blue_strip)");
  } else {
    document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
    console.log("no footer");
  };
  if ( currentSlide.getAttribute('data-state') )
  {
    var data_state = currentSlide.getAttribute('data-state')
    var opacity = getOpacity(data_state);
    console.log("DS" + data_state)
    // pre-set slide designs

    // standard
    if ( data_state.includes("standard"))
    {
      data_state += " logo yellow_flag white_overlay";
    };

    // two_pane
    if ( data_state.includes("two_pane"))
    {
      data_state += " logo yellow_flag white_overlay blue_pane_right";
    };

    // about
    if ( data_state.includes("about"))
    {
      data_state += " logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip";
    };

    // touch
    if ( data_state.includes("touch"))
    {
      data_state += " logo blue_overlay touch_pane purple_blob right_e_bottom";
    };

    // title
    if ( data_state.includes("title"))
    {
      data_state += "  blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top";
    };

    // individual elements

    // purple overlay
    if ( data_state.includes("purple_overlay"))
    {
      document.getElementById("purple_overlay").style.opacity = opacity;
      document.getElementById("purple_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-blue)");
      console.log("purple overlay");
    } else {
      document.getElementById("purple_overlay").style.opacity = 0;
      console.log("no purple overlay");
    };

    // white overlay
    if ( data_state.includes("white_overlay"))
    {
      document.getElementById("white_overlay").style.opacity = opacity;
      document.getElementById("white_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 1;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.add("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-blue)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-yellow)");
      console.log("white overlay");
    } else {
      document.getElementById("white_overlay").style.opacity = 0;
      console.log("no white overlay");
    };

    // black overlay
    if ( data_state.includes("black_overlay"))
    {
      document.getElementById("black_overlay").style.opacity = opacity;
      document.getElementById("black_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-blue)");
      console.log("black overlay");
    } else {
      document.getElementById("black_overlay").style.opacity = 0;
      console.log("no black overlay");
    };

    // blue overlay
    if ( data_state.includes("blue_overlay"))
    {
      document.getElementById("blue_overlay").style.opacity = opacity;
      document.getElementById("blue_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 1;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-purple)");
      console.log("blue overlay");
    } else {
      document.getElementById("blue_overlay").style.opacity = 0;
      console.log("no blue overlay");
    };

    // blue pane right
    if ( data_state.includes("blue_pane_right"))
    {
      document.getElementById("blue_pane_right").style.opacity = 1;
      document.getElementById("blue_pane_right").style.transform = "translateY(0)";
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_right");
    } else {
      document.getElementById("blue_pane_right").style.opacity = 0;
      console.log("no blue_pane_right");
    };

    // blue pane left
    if ( data_state.includes("blue_pane_left"))
    {
      document.getElementById("blue_pane_left").style.opacity = 1;
      document.getElementById("blue_pane_left").style.transform = "translateY(0)";
      setLogoStyle("logo_white");
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_left");
    } else {
      document.getElementById("blue_pane_left").style.opacity = 0;
      console.log("no blue_pane_left");
    };

    // touch pane
    if ( data_state.includes("touch_pane"))
    {
      document.getElementById("touch_pane").style.opacity = 1;
      document.getElementById("touch_pane").style.transform = "translateY(0)";
      setLogoStyle("logo_color");
      currentSlide.classList.remove("has-light-background");
      currentSlide.classList.add("has-dark-background");
      console.log("touch_pane");
    } else {
      document.getElementById("touch_pane").style.opacity = 0;
      console.log("no touch_pane");
    };

    // logo
    if ( data_state.includes("logo"))
    {
      document.getElementById("logo_color").style.left = 3 + "vw";
      document.getElementById("logo_part_white").style.left = 3 + "vw";
      document.getElementById("logo_white").style.left = 3 + "vw";
      console.log("logo");
    } else {
      document.getElementById("logo_color").style.left = -12 + "vw";
      document.getElementById("logo_part_white").style.left = -12 + "vw";
      document.getElementById("logo_white").style.left = -12 + "vw";
      console.log("no logo");
    };

    // yellow strip
    if ( data_state.includes("yellow_strip"))
    {
      document.getElementById("yellow_strip").style.left = 0;
      console.log("yellow_strip");
    } else {
      document.getElementById("yellow_strip").style.left = -10 + "vw";
      console.log("no yellow_strip");
    };

    // yellow flag
    if ( data_state.includes("yellow_flag"))
    {
      document.getElementById("yellow_flag").style.left = 0;
      console.log("yellow_flag");
    } else {
      document.getElementById("yellow_flag").style.left = -10 + "vh";
      console.log("no yellow_flag");
    };

    // purple half circle top
    if ( data_state.includes("purple_half_circle_top"))
    {
      document.getElementById("purple_half_circle_top").style.top = 0;
      setLogoStyle("logo_part_white");
      console.log("purple_half_circle_top");
    } else {
      document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
      console.log("no purple_half_circle_top");
    };

    // purple half circle bottom
    if ( data_state.includes("purple_half_circle_bottom"))
    {
      document.getElementById("purple_half_circle_bottom").style.bottom = 0;
      document.getElementById("yellow_flag").style.bottom = 20 + "vh";
      console.log("purple_half_circle_bottom");
    } else {
      document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
      document.getElementById("yellow_flag").style.bottom = 5 + "vh";
      console.log("no purple_half_circle_bottom");
    };

    // purple strip bottom
    if ( data_state.includes("purple_strip_bottom"))
    {
      document.getElementById("purple_strip_bottom").style.bottom = 0;
      console.log("purple_strip_bottom");
    } else {
      document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
      console.log("no purple_strip_bottom");
    };

    // yellow_half_strip
    if ( data_state.includes("yellow_half_strip"))
    {
      document.getElementById("yellow_half_strip").style.bottom = 0;
      console.log("yellow_half_strip");
    } else {
      document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
      console.log("no yellow_half_strip");
    };

    // purple blob
    if ( data_state.includes("purple_blob"))
    {
      document.getElementById("purple_blob").style.top = 0;
      console.log("purple_blob");
    } else {
      document.getElementById("purple_blob").style.top = -50 + "vh";
      console.log("no purple_blob");
    };

    // right_e
    if ( data_state.includes("right_e_top"))
    {
      document.getElementById("right_e").style.top = 10 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_top");
    } else if ( data_state.includes("right_e_bottom")){
      document.getElementById("right_e").style.top = 60 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_bottom");
    } else {
      document.getElementById("right_e").style.right = -4 + "vw";
      console.log("no right_e");
    };

    // clear the background so that the overlays don't interfere
    // with underlying iframe
    if ( data_state.includes("clear_background"))
    {
      document.getElementById("purple_overlay").style.transform = "translateY(100vh)";
      document.getElementById("white_overlay").style.transform = "translateY(100vh)";
      document.getElementById("black_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_right").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_left").style.transform = "translateY(100vh)";
      document.getElementById("touch_pane").style.transform = "translateY(100vh)";
    };
  }
  else
  {
    console.log("nothing special")
  };
};

function removeDecorations() {
  console.log("removeDecorations")
  document.getElementById("purple_overlay").style.opacity = 0;
  document.getElementById("white_overlay").style.opacity = 0;
  document.getElementById("black_overlay").style.opacity = 0;
  document.getElementById("blue_overlay").style.opacity = 0;
  document.getElementById("blue_pane_right").style.opacity = 0;
  document.getElementById("blue_pane_left").style.opacity = 0;
  document.getElementById("touch_pane").style.opacity = 0;
  document.getElementById("logo_color").style.left = -12 + "vw";
  document.getElementById("logo_part_white").style.left = -12 + "vw";
  document.getElementById("logo_white").style.left = -12 + "vw";
  document.getElementById("yellow_strip").style.left = -10 + "vw";
  document.getElementById("yellow_flag").style.left = -10 + "vh";
  document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
  document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
  document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
  document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
  document.getElementById("purple_blob").style.top = -50 + "vh";
  document.getElementById("right_e").style.right = -4 + "vw";
  document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
};

}
