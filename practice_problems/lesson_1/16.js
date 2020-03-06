function oktalToDecimal(numberString) {
  return convertChars([...numberString]).reduce((sum, el) => sum + el);
}

function convertChars(chars) {
  let maxIndex = chars.length - 1;
  return chars.map((char, i) => Number(char) * 8 ** (maxIndex - i))
}

// --- with only 1 reduce ---

function octalToDecimal(string) {
  return [...string].reduce((sum, char, i) => {
    return sum + Number(char) * Math.pow(8, string.length - i - 1);
  }, 0)
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

