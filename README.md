# youtube-suggest

get youtube search suggestions for a query, in node.js and the browser

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/youtube-suggest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/youtube-suggest
[travis-image]: https://img.shields.io/travis/com/goto-bus-stop/youtube-suggest.svg?style=flat-square
[travis-url]: https://travis-ci.com/goto-bus-stop/youtube-suggest
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

### `youtubeSuggest(query: string): Promise<string[]>`
Do a network request for suggestions, returning the suggested completion strings as an array.

In Node.js it uses `node-fetch`. In the browser it uses JSONP.

## License

[Apache-2.0](LICENSE.md)
