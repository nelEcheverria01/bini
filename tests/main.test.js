'use strict'

const test = require('ava')
const bini = require('../')

test('bini should return a string with the result, something like \'011101 00010...\'', t => {
  const result = bini('hello')
  const expected = '01101000 01100101 01101100 01101100 01101111' // precalculated

  t.is(result, expected)
})

test('throw an error, when the argument is not of type string', t => {
  const err = t.throws(_ => bini(45))

  t.assert(err instanceof Error)
  t.is(err.message, 'the argument must be of type string')
})
