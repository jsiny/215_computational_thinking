// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.

/*
--- PROBLEM ---

input: a string
output: a string

rules:
- output string is composed of, successively:
-- input string char: 1 out of 4 starting at 0
-- input string char: 1 out of 2 (starting at 1)
-- input string char: 1 out of 4 starting at 2


--- DATA STRUCTURE ---
- input: string
- output: string
- rule: remove non digits and letters through a regex

--- ALGORITHM ---
- create result string
- clean up the input string (remove non alphanumeric chars)
- iterate 3 times through the input string:
-- with i = 0, i += 4
-- with i = 1, i+= 2
-- with i = 2, i += 4
- for each iteration, add the current char to the result string
- return result string

*/

function encodeLine(string, start, step) {
  let line = '';

  for (let i = start; i < string.length; i += step) {
    line += string[i];
  }

  return line;
}

function decode(string) {

}

console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN') === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WECRERDSOEEAIVD') === 'WEAREDISCOVERED');
console.log(decode('WECRERDSOEE!AIVD') === 'WEAREDISCOVERED!');
console.log(decode('ONE') === 'ONE');
console.log(decode('HOEL!L') === 'HELLO!');
console.log(decode("TEPOHR'1ESNESR") === "THERE'S1PERSON");

function encode(string) {
  let str = string.toUpperCase().replace(/ /g, '');
  let result = '';

  result += encodeLine(str, 0, 4);
  result += encodeLine(str, 1, 2);
  result += encodeLine(str, 2, 4);

  return result;
}

// console.log(encode('We are discovered flee at once') === 'WECRLTEERDSOEEFEAOCAIVDEN'); 
// console.log(encode('We are discovered') === 'WECRERDSOEEAIVD'); 
// console.log(encode('one') === 'ONE'); 
// console.log(encode('hello!') === 'HOEL!L'); 
// console.log(encode("There's 1 person") === "TEPOHR'1ESNESR"); 
// console.log(encode('') === ''); 
// console.log(encode('/:-&') === '/:&-'); 

// t    e       p      o
//  h r   '   1  e   s   n
//   e      s      r 

// W       E       C       R
//   E   R   D   S   O   E   E   !
//     A       I       V       D


// wrong :(
// number of tops: Math.floor((length - 1) / 4)
// number of bottoms: Math.floor((length - 2) / 4)