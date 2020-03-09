const language = 'JavaScript';
const idx = language.indexOf('S');
const charCode = language.charCodeAt(idx);

console.log(idx);
console.log(charCode);
console.log(String.fromCharCode(charCode));
console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4)); // avaS
console.log(language.substr(vIndex, 4)); // vaSc

console.log(language.substring(aIndex, 4)); // ava
console.log(language.substring(vIndex, 4)); // va