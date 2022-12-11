// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

function pyramid(n) {
  if (n < 1) return null

  const maxCharsCount = n * 2 - 1

  for (let i = 1; i <= n; i++) {
    const hashCharsCount = i * 2 - 1
    const hashChars = '#'.repeat(hashCharsCount)
    const whiteSpaces = ' '.repeat((maxCharsCount - hashCharsCount) / 2)

    console.log(whiteSpaces + hashChars + whiteSpaces)
  }
}

module.exports = pyramid;
