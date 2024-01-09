'use strict'

/**
 * function that returns a string passed by parameter in its binary representation
 * @param {string} text text to convert to binary
 * @returns {string} a string as a result
 * @example '01101000 01100101 01101100 01101100 01101111'
 */
function bini (text) {
  if (typeof text !== 'string') {
    throw new Error('the argument must be of type string')
  }

  /* eslint-disable camelcase */
  const binary_arr = text.split('').map(character => {
    const unicode = character.charCodeAt()
    const binary = unicode.toString(2).padStart(8, 0)

    return binary
  })

  return binary_arr.join(' ')
}

module.exports = bini
