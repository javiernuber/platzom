'use strict'

export default function platzom (str) {
    let translation = str
    // If the word ends with "ar", those two letters are removed
    if (translation.toLowerCase().endsWith('ar')) {
      translation = translation.slice(0, -2)
    }

    // If the word starts with z, "pe" is added at the end
    if (translation.toLowerCase().startsWith('z')) {
      translation += 'pe'
    }

    // If the translated word has 10 or more letters, it should be
    // split in half and linked with a half dash
    const length = translation.length
    if (length >= 10) {
      const firstHalf = translation.slice(0, Math.round(length / 2))
      const secondHalf = translation.slice(Math.round(length / 2))
      translation = `${firstHalf}-${secondHalf}`
    }

    // Finally, if the original word is a palindrome, no previous rule counts
    // and returns the same word but inserting uppercase and lowercase letters
    const reverse = (str) => str.split('').reverse().join('')
    function minMay (str) {
      const length = str.length
      let translation = ''
      let capitalize = true
      for (let i = 0; i < length; i++) {
        const char = str.charAt(i)
        translation += capitalize ? char.toUpperCase() : char.toLowerCase()
        capitalize = !capitalize
      }
      return translation
    }
    if (str === reverse(str)) {
      return minMay(str)
    }

    return translation
}
