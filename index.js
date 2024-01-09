function bini (text) {
  /* eslint-disable camelcase */
  const binary_arr = text.split('').map(character => {
    const unicode = character.charCodeAt()
    const binary = unicode.toString(2).padStart(8, 0)

    return binary
  })

  return binary_arr.join(' ')
}

module.exports = bini