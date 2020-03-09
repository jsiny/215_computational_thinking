let text = 'The quick brown fox jumps over the lazy dog.';

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalize(text) {
  return text.split(' ').map(capitalizeWord).join(' ');
}

console.log(capitalize(text));