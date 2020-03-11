/*
Problem:
- input: two version numbers in string representation
- output: 1, -1, 0 or null

Rules:
- version number:
-- digits separated by .
-- no other char or return null

- comparing two version numbers is done from left to right
-- parse the number (split between .)
-- compare the 2 leftmost numbers
-- compare the next leftmost numbers if the previous comparison was inconclusive

- if a number has no more digits, it's smaller than the other.

Data Structure:
- convert version numbers into arrays (split on .)

Algorithm:
- return null if one of the strings contains smth else than . or digit
- convert string version into array of digits (dot separated)
- loop through the 2 arrays, comparing each number
-- if the two are equal, go to next iteration
-- otherwise, return -1 if the first one is smaller, 1 otherwise
*/

function isValidVersionNumber(str) {
  return /^\d+(\.\d+)*$/.test(str);
}

function argsAreInvalid(a, b) {
  return !isValidVersionNumber(a) || !isValidVersionNumber(b);
}

function compareVersions(version1, version2) {
  if (argsAreInvalid(version1, version2)) return null;

  const digits1 = version1.split('.').map(Number);
  const digits2 = version2.split('.').map(Number);
  const length  = Math.max(digits1.length, digits2.length);

  for (let i = 0, a, b; i < length; i += 1) {
    a = digits1[i] || 0;
    b = digits2[i] || 0;

    if (a < b) return -1;
    if (a > b) return 1;
  }

  return 0;
}

console.log(compareVersions('0.1', '1')      === -1);
console.log(compareVersions('1', '1.3')      === -1);
console.log(compareVersions('1.1.2', '1')    === 1);
console.log(compareVersions('1.2', '1.18.2') === -1);
console.log(compareVersions('13.18', '1.17') === 1);
console.log(compareVersions('1', '1.0')      === 0);
console.log(compareVersions('1.0', '1.0.5')  === -1);
console.log(compareVersions('.1', '1')       === null);
console.log(compareVersions('hello.1', '1')  === null);
console.log(compareVersions('1.a', '1')      === null);
console.log(compareVersions('1..0', '2.0')   === null);
