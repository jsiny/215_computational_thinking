function replaceDigitsByRealValue(arr) {
  let previousNum = Number(arr[0]);
  let previousDigits;
  let currentDigits;
  let digitsLength;

  return arr.map((n) => {
    if (n === '-') return n;

    digitsLength   = n.length;
    currentDigits  = Number(n);
    previousDigits = Number(String(previousNum).slice(-digitsLength));
    previousNum    = previousNum - previousDigits + currentDigits;

    if (currentDigits < previousDigits) previousNum += 10 ** digitsLength;

    return previousNum;
  });
}

function addNumberSequence(arr, start, end) {
  for (let k = start; k < end; k += 1) {
    arr.push(k);
  }

  return arr;
}

function convertRangeIntoNumberSequence(arr) {
  const result = [];

  arr.forEach((n, i) => {
    if (n === '-') return;

    if (arr[i + 1] !== '-') {
      result.push(n);
    } else {
      addNumberSequence(result, n, arr[i + 2]);
    }
  });

  return result;
}

function standardizeRangeDelimiters(str) {
  return str.replace(/(\.\.|:)/g, '-');
}

function filterNonDigitOrDash(arr) {
  return arr.filter((n) => /[\d-]/.test(n));
}

function splitString(str) {
  const result = [];
  let numberString = '';

  for (let i = 0; i < str.length; i += 1) {
    if (/\d/.test(str[i])) {
      numberString += str[i];
    } else {
      result.push(numberString);
      result.push(str[i]);
      numberString = '';
    }
  }

  if (numberString) result.push(numberString);
  return result;
}

function convertInputIntoArray(str) {
  const string = standardizeRangeDelimiters(str);
  const result = splitString(string);

  return filterNonDigitOrDash(result);
}

function shortHandRange(str) {
  const array  = convertInputIntoArray(str);
  const values = replaceDigitsByRealValue(array);
  const result = convertRangeIntoNumberSequence(values);

  return result.join(', ');
}

// --- EXAMPLES ---

console.log(shortHandRange('1, 3, 7, 2, 4, 1')); // === '1, 3, 7, 12, 14, 21'
console.log(shortHandRange('1-3, 1-2'));         // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1..3, 1..2'));       // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1:3, 1:2'));         // === '1, 2, 3, 11, 12'
console.log(shortHandRange('1:5:2'));            // '1, 2, 3, 4, 5, 6, ... 12'
console.log(shortHandRange('104-2'));            // '104, 105, ... 112'
console.log(shortHandRange('104-02'));           // '104, 105, ... 202'
console.log(shortHandRange('545, 64:11'));       // '545, 564, 565, .. 611'

// 2h40
