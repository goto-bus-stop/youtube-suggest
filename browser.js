var jsonp = require('smol-jsonp')

// `client` is a required parameter. `client=firefox` returns the smallest result.
var baseUrl = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

function unwrapResults (data) { return data[1] }

function youtubeSuggest (query) {
  return jsonp(baseUrl + encodeURIComponent(query))
    .then(unwrapResults)
}

module.exports = youtubeSuggest
