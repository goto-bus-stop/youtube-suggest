let fetch = require('node-fetch')
if (typeof fetch !== 'function') fetch = window.fetch

// `client` is a required parameter. `client=firefox` returns the smallest result.
const baseUrl = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
const headers = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0' }

function parseJson (res) { return res.json() }
function unwrapResults (data) { return data[1] }

function youtubeSuggest (query) {
  return fetch(baseUrl + encodeURIComponent(query), { headers })
    .then(parseJson)
    .then(unwrapResults)
}

module.exports = youtubeSuggest
