const expect = require('chai').expect
const platzom = require('..').default

describe ('#Platzom', function () {

  it ('If the word ends with "ar", those two letters are removed', function () {
    const translation = platzom('Programar')
    expect(translation).to.equal('Program')
  })

  it ('If the word starts with z, "pe" is added at the end', function () {
    const translation = platzom('Zorro')
    const translation1 = platzom('Zarpar')
    expect(translation).to.equal('Zorrope')
    expect(translation1).to.equal('Zarppe')
  })

  it ('If the translated word has 10 or more letters, it should be split in half and linked with a half dash', function () {
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it ('Finally, if the original word is a palindrome, no previous rule counts and returns the same word but inserting uppercase and lowercase letters', function () {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

  it ('There are not changes', function () {
    const translation = platzom('Javi')
    expect(translation).to.equal('Javi')
  })
})
