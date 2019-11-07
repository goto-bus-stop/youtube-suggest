// `client` is a required parameter. `client=firefox` returns the smallest result.
var baseUrl = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

var callbacks = {}
Object.defineProperty(window, '__youtubeSuggestCallbacks', { value: callbacks })

function createScript (url) {
  var s = document.createElement('script')
  s.async = true
  s.src = url
  document.body.appendChild(s)
  return s
}

var jsonpIndex = 0
function jsonp (url) {
  var callbackName = 'jsonp' + jsonpIndex
  var s = createScript(url + '&callback=' + encodeURIComponent('__youtubeSuggestCallbacks.' + callbackName))
  function cleanup () {
    delete callbacks[callbackName]
    document.body.removeChild(s)
  }
  return new Promise(function (resolve, reject) {
    callbacks[callbackName] = resolve
    s.onerror = reject

    jsonpIndex += 1
  }).then(function (result) {
    cleanup()
    return result
  }).catch(function (err) {
    cleanup()
    throw err
  })
}

function unwrapResults (data) { return data[1] }

function youtubeSuggest (query) {
  return jsonp(baseUrl + encodeURIComponent(query))
    .then(unwrapResults)
}

module.exports = youtubeSuggest
