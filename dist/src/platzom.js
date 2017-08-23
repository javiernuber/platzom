'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  // If the word ends with "ar", those two letters are removed
  if (translation.toLowerCase().endsWith('ar')) {
    translation = translation.slice(0, -2);
  }

  // If the word starts with z, "pe" is added at the end
  if (translation.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // If the translated word has 10 or more letters, it should be
  // split in half and linked with a half dash
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  // Finally, if the original word is a palindrome, no previous rule counts
  // and returns the same word but inserting uppercase and lowercase letters
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str === reverse(str)) {
    return minMay(str);
  }

  return translation;
}