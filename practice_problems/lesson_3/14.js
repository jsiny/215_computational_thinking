// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

/*
--- PROBLEM ---
input: a string representation of a number
output: a boolean

rules:
- count from the right to the left
- double the value of every second digit
- if the new value is over 9, remove 9
- sum up the whole numbers
- it's valid if the sum is divisible by 10

mental model:
- transform the array of digit to its 'double' value and sum it
- return boolean of modulo 10

--- DATA STRUCTURE ---
- array

--- ALGORITHM ---
- ignore non numeric elements
- convert the string into an array (reversed)
- transform the array depending on its index
-- if odd index, double the value (and remove 9 if higher than 10)
- sum returned index
- return sum % 10 === 0

*/

function checksumLuhn(num) {
  let cleanNum = num.replace(/\D/g, '');
  let digits = [...cleanNum].reverse().map(Number);

  let sum = digits.reduce((total, n, i) => {
    if (i % 2 === 0) {
      return total + n;
    } else {
      return total + (n * 2 % 9);
    }
  })

  return sum % 10 === 0;
}

console.log(checksumLuhn('2323 2005 7766 3554') === true ); 
console.log(checksumLuhn('972-487-086')         === true ); 
console.log(checksumLuhn('1111')                === false ); 
console.log(checksumLuhn('11-1.1')              === false ); 
console.log(checksumLuhn('8763')                === true ); 
console.log(checksumLuhn('927-487-086')         === false ); 
// console.log(checksumLuhn('') ) // === true ); 