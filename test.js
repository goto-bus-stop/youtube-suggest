'use strict'

const youtubeSuggest = require('.')
const assert = require('assert')

youtubeSuggest('query').then(function (results) {
  assert(Array.isArray(results))
  assert(typeof results[0] === 'string')
}).catch(function (err) {
  console.error(err)
  process.exit(1)
})

// Should return pet-related suggestions in the US,
// but "petit xyz" in France
Promise.all([
  youtubeSuggest('pet', { locale: 'en-us' }),
  youtubeSuggest('pet', { locale: 'fr' })
]).then(function (results) {
  assert.notDeepEqual(results[0], results[1])
})
