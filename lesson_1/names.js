let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

function convertToFirstLetter(array) {
  return array.map(element => element[0]);
}

let letters = convertToFirstLetter(names);
// [ "H", "G", "K", "H", "K", "K", "O" ]

function countOccurrences(array) {
  return letters.reduce((obj, letter) => {
    obj[letter] = obj[letter] || 0;
    obj[letter] += 1;
    return obj;
  }, {})
}

let count = countOccurrences(letters);
// { H: 2, G: 1, K: 3, O: 1 }

function findMaxOccurrences(obj) {
  return Object.keys(obj).reduce((lastEl, currentEl) => {
    return obj[lastEl] > obj[currentEl] ? lastEl : currentEl;
  })
}

let letter = findMaxOccurrences(count);
// 'K'
