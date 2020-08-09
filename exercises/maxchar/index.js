// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const mappedChars = str.split("").reduce((obj, char) => {
    return {
      ...obj,
      [char]: (obj[char] || 0) + 1,
    };
  }, {});

  return Object.keys(mappedChars).reduce((a, b) => (mappedChars[a] > mappedChars[b] ? a : b));
}

module.exports = maxChar;
