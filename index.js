var fetch = require('node-fetch')
if (typeof fetch !== 'function') fetch = window.fetch

// `client` is a required parameter. `client=firefox` returns the smallest result.
var baseUrl = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

function parseJson (res) { return res.json() }
function unwrapResults (data) { return data[1] }

function youtubeSuggest (query) {
  return fetch(baseUrl + encodeURIComponent(query))
    .then(parseJson)
    .then(unwrapResults)
}

module.exports = youtubeSuggest
