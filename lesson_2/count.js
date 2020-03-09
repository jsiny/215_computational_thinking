let text = 'The quick brown fox jumps over the lazy dog.';

function countWordInText(word, text) {
  return text.toLowerCase()
             .replace(/[^a-z ]/g, '')
             .split(' ')
             .filter(w => w === word)
             .length;
}

console.log(countWordInText('the', text));    // 2
console.log(countWordInText('dog', text));    // 1