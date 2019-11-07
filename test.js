var youtubeSuggest = require('.')
var assert = require('assert')

youtubeSuggest('query').then(function (results) {
  assert(Array.isArray(results))
  assert(typeof results[0] === 'string')
}).catch(function (err) {
  console.error(err)
  process.exit(1)
})
