// --- Directions
// You are given a single lowercase string as an argument. Return the longest palindrome contained in that string.
// Palindromes are strings that form the same word if it is reversed.
// --- Examples
//   longestPalindrome("mammagamma")
//     "ammagamma"
//   longestPalindrome("minimum")
//     "minim"

const longestPalindrome = (str) => {
  let longestPalindromeSubstr = ''
  let tempSubstr = ''

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > 0; j--) {
      if (i == j) continue

      tempSubstr = str.substring(i, j)

      if (tempSubstr == tempSubstr.split("").reverse().join("") && tempSubstr.length > longestPalindromeSubstr.length) {
        longestPalindromeSubstr = tempSubstr
      }
    }
  }

  return longestPalindromeSubstr
}

module.exports = longestPalindrome;
