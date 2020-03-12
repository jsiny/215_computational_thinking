/*
--------- SHORT HAND RANGE ---------

--- PROBLEM ---

input:
- a string of digits, separated by ',' '-' '..' or ':', with or without ' '
- assume only integers, no floats

output:
- a string of digits, comma-separated (', ')

rules:
- two digits separated by a comma do not represent a range
- two digits separated by '-', ':' or '..' represent a range
- only the last digit of a number is given:
-- if the second number has several digits:
--- compare the same digit (in terms of position) 
-- if the second number is lower (or equal) than the first one, then add 10 to the second value (or 100, or 1000 depending on the position) 

mental model:
- replace every digits by its real value
- transform the string according to the featured ranges

--- DATA STRUCTURE ---

- convert the input string to an array containing both digits and symbols
- use an array for the result
- return a string (joining the array)

--- ALGORITHM ---

- convert to an array
-- filter out spaces and commas
- replace every digits by its real value
-- NEW function replaceDigits()
- transform the string according to the featured ranges
-- NEW function convertRanges()
- join the result array into a comma-separated string

*/

function replaceDigits(arr) {
  let previousNum = Number(arr[0]);
  let previousDigits;
  let currentDigits;
  let digitsLength;

  return arr.map(n => {
    if (n === '-') return n;

    digitsLength   = n.length;
    currentDigits  = Number(n);
    previousDigits = Number(String(previousNum).slice(- digitsLength));
    previousNum    = previousNum - previousDigits + currentDigits;

    if (currentDigits < previousDigits) previousNum += 10 ** digitsLength;

    return previousNum;
  })
}

/*
--------- CONVERT RANGES ---------
--- PROBLEM ---

input: an array of digits and strings
output: an array of digits

mental model:
- for each value, check if the next one is '-'
-- if it's not, return the value
-- if it is, declare the current value as start and the one in 2 i as end
-- iterate from start to end and add the value to the result array

--- DATA STRUCTURE ---
- return a new array

--- ALGORITHM ---


*/

function convertRange(arr) {
  let result = [];
  let start;
  let end;

  arr.forEach((n, i) => {
    if (n === '-') {
      // do nothing
    } else if (arr[i + 1] !== '-') {
      result.push(n);
    } else {
      start = n;
      end = arr[i + 2];

      for (let k = start; k < end; k += 1) {
        result.push(k);
      }
    }
  })

  return result;
}

// --- EXAMPLES ---

// console.log(convertRange([ 1, 3, 7, 12, 14, 21 ]));
// // [ 1, 3, 7, 12, 14, 21 ]
// console.log(convertRange([ 1, '-', 3, 11, '-', 12 ]));
// // [1, 2, 3, 11, 12]
// console.log(convertRange([ 1, '-', 5, '-', 12 ]));
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(convertRange([ 104, '-', 112 ]))
// // [104, 105, 106, 107, 108, 109, 110, 111, 112]
// console.log(convertRange([ 545, 564, '-', 611 ]))
// // [545, 564, 565, 566, 567 ... 610, 611]

function convertInputIntoArray(str) {
  let string = str.replace(/(\.\.|\:)/g, '-').replace(/[,]/g, ' ');  
  let result = [];
  let numberString = '';
  
  for (let i = 0; i < string.length; i += 1) {
    if (/\d/.test(string[i])) {
      numberString += string[i];
    } else if (string[i] === '-') {
      result.push(numberString);
      result.push('-');
      numberString = '';
    } else {
      result.push(numberString);
      numberString = '';
    }
  }

  if (numberString) result.push(numberString);

  return result.filter(n => n !== '');
}

function shortHandRange(str) {
  let array  = convertInputIntoArray(str)
  let values = replaceDigits(array);
  let range  = convertRange(values);
  return range.join(', ');
}

// --- EXAMPLES ---

console.log(shortHandRange('1, 3, 7, 2, 4, 1')  ) // === '1, 3, 7, 12, 14, 21'
console.log(shortHandRange('1-3, 1-2')          ) // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1..3, 1..2')        ) // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1:3, 1:2')          ) // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1:5:2')             ) // '1, 2, 3, 4, 5, 6, ... 12'
console.log(shortHandRange('104-2')             ) // '104, 105, ... 112'
console.log(shortHandRange('104-02')            ) // '104, 105, ... 202'
console.log(shortHandRange('545, 64:11')        ) // '545, 564, 565, .. 611'






/*
--------- REPLACE DIGITS ---------

--- PROBLEM ---
- input: an array of string. Some are representations of digits, and others are '-' ':' '..' 
- output: an array of digits and strings

- rules:
-- if it's a non-digit, leave it be
-- if it's a digit (compare the same number of digits!)
--- is it bigger than the previous one? then change the previous number's last digit to the given value
--- if it's smaller, then add the number of digits * 10 to the previous number and also change their x last digits to the new digits

--- DATA STRUCTURE ---
- array

--- ALGORITHM ---

- previousNum = first element converted to number
- previousDigits
- currentDigits
- result array = [previousNum]

- for loop starting at index 1
-- if element at that index is not a digit => push it to result array & continue
-- convert current element to number and assign it to currentDigits
-- extract the same number of digits from previousNum to previousDigits
-- compare previousDigits and currentDigits:
--- if currentDigits bigger:
---- previousNum = (previousNum - previousDigits + currentDigits)
-- if currentDigits smaller:
--- previousNum = (previousNum - previousDigits + currentDigits + 10** digitsLength)
-- push previousNum to result array 

*/

// --- EXAMPLES ---

// console.log(replaceDigits(['1', '3', '7', '2', '4', '1']));
// // [1, 3, 7, 12, 14, 21]
// console.log(replaceDigits(['1', '-', '3', '1', '-', '2']));
// // [1, '-', 3, 11, '-', 12]
// console.log(replaceDigits(['1', ':', '5', ':', '2']));
// // [1, ':', 5, ':', 12]
// console.log(replaceDigits(['104', '-', '2']));
// // [104, '-', 112]
// console.log(replaceDigits(['104', '-', '02']));
// // [104, '-', 202]
// console.log(replaceDigits(['545', '64', ':', '11']));
// // [545, 564, ':', 611]


// --- EXAMPLES ---

// console.log(convertInputIntoArray('1, 3, 7, 2, 4, 1'));
// // [ '1', '3', '7', '2', '4', '1' ]
// console.log(convertInputIntoArray('1-3, 1-2'));
// // [ '1', '-', '3', '1', '-', '2' ]
// console.log(convertInputIntoArray('104-02'));
// // [ '104', '-', '02' ]
// console.log(convertInputIntoArray('545, 64:11'));
// // [ '545', '64', '-', '11' ]