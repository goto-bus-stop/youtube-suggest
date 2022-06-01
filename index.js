'use strict'

const fetch = require('node-fetch')

// `client` is a required parameter. `client=firefox` returns the smallest result.
const baseUrl = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt'
const headers = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0' }

function parseJson (res) { return res.json() }
function unwrapResults (data) { return data[1] }

function youtubeSuggest (query, opts) {
  const url = new URL(baseUrl)
  url.searchParams.set('q', query)
  if (opts && opts.locale) {
    url.searchParams.set('hl', String(opts.locale))
  }
  return fetch(url, { headers })
    .then(parseJson)
    .then(unwrapResults)
}

module.exports = youtubeSuggest
