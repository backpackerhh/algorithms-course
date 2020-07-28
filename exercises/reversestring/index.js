// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");

  // Alternative 1:
  // let reversedStr = "";

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str[i];
  // }

  // return reversedStr;

  // Alternative 2:
  // let reversedStr = "";

  // for (character of str) {
  //   reversedStr = character + reversedStr;
  // }

  // return reversedStr;

  // Alternative 3:
  // return str.split("").reduce((rev, char) => char + rev, "")
}

module.exports = reverse;
