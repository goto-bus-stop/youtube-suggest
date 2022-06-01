# youtube-suggest

get youtube search suggestions for a query, in node.js and the browser

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![ci status][actions-image]][actions-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/youtube-suggest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/youtube-suggest
[actions-image]: https://github.com/goto-bus-stop/youtube-suggest/actions/workflows/ci.yml/badge.svg
[actions-url]: https://github.com/goto-bus-stop/youtube-suggest/actions/workflows/ci.yml
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install youtube-suggest
```

## Usage

```js
var youtubeSuggest = require('youtube-suggest')
var assert = require('assert')

youtubeSuggest('query').then(function (results) {
  assert(Array.isArray(results))
  assert(typeof results[0] === 'string')
})
```

## API

### `youtubeSuggest(query: string, opts?: { locale?: string }): Promise<string[]>`
Do a network request for suggestions, returning the suggested completion strings as an array.

Optionally specify an [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code to get
completions intended for that locale:
```js
youtubeSuggest('pet', { locale: 'en' }) // returns people named "peter", pet video titles, etc
youtubeSuggest('pet', { locale: 'fr' }) // returns various small things
```

In Node.js it uses `node-fetch`. In the browser it uses JSONP.

## License

[Apache-2.0](LICENSE.md)
