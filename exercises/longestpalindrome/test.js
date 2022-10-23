const longestPalindrome = require('./index');

test('longestPalindrome is a function', () => {
  expect(typeof longestPalindrome).toEqual('function');
});

test('returns longest palindrome for "minimum"', () => {
  expect(longestPalindrome('minimum')).toEqual('minim');
});

test('returns longest palindrome for "mammagamma"', () => {
  expect(longestPalindrome('mammagamma')).toEqual('ammagamma');
});
