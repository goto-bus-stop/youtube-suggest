/* eslint-disable no-var */
'use strict'

var jsonp = require('smol-jsonp')

// `client` is a required parameter. `client=firefox` returns the smallest result.
var baseUrl = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt'

function unwrapResults (data) { return data[1] }

function youtubeSuggest (query, opts) {
  var url = baseUrl + '&q=' + encodeURIComponent(query)
  if (opts && opts.locale) {
    url += '&hl=' + encodeURIComponent(opts.locale)
  }

  return jsonp(url)
    .then(unwrapResults)
}

module.exports = youtubeSuggest
