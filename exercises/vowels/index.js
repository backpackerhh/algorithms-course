// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const regex = /[aeiou]/i
  let count = 0

  str.split("").map(char => {
    if (regex.test(char)) count++
  })

  return count

  // Alternative 1:
  // const matches = str.match(/[aeiou]/gi)

  // return matches?.length || 0
}

module.exports = vowels;
