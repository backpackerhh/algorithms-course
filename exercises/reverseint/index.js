// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  const reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");

  return Math.sign(number) * parseInt(reversed);
}

module.exports = reverseInt;
