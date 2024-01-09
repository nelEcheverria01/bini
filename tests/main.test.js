const test = require('ava')
const bini = require('../')

test('bini should return a string with the result, something like \'011101 00010...\'', t => {
  const result = bini('hello')
  const expected = '01101000 01100101 01101100 01101100 01101111'

  t.is(result, expected)
})
