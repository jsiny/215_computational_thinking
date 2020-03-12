
/*
--- PROBLEM ---
input:
- string

output:
- boolean

rules:
- can only use a duo of letters once
- case-insensitive

--- DATA STRUCTURE ---
- input: string / array
- rules: 2 arrays of letters, where each pair has the same index

--- ALGORITHM ---
- convert the input string into an uppercase str
- iterate through the string
-- check the index of the char in both arrays, save that value
-- splice the two arrays at that index
-- if I don't find the char in any array, return false
- return true;
*/

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M 


// function findLetterIndex(char) {
//   let result = first.indexOf(char);
//   if (result === -1) result = second.indexOf(char);

//   return result;
// }


function isBlockWord(string) {
  let first = ['B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z'];
  let sec   = ['O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y', 'M'];
  let str = string.toUpperCase();

  for (let i = 0, j; i < str.length; i += 1) {
    j = first.indexOf(str[i]);
    if (j === -1) j = sec.indexOf(str[i]);
    if (j === -1) return false;

    first.splice(j, 1);
    sec.splice(j, 1);    
  }

  return true;
}


// Examples:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
