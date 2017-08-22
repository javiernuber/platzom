# Platzom

Translator of an invented language

## Description

- If the word ends with "ar", those two letters are removed
- If the word starts with Z, "pe" is added at the end
- If the translated word has 10 or more letters, it should be split in half and linked with a half dash
- Finally, if the original word is a palindrome, no previous rule counts and returns the same word but inserting uppercase and lowercase letters

## Installation

```
npm install platzom
```

## Use

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Credits

- [javiernuber](https://twitter.com/@javiernuber)

## License

[MIT](https://opensource.org/licenses/MIT)
