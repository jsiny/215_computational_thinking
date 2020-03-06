function isAnagram(word, candidate) {
  return word !== candidate &&
         [...word].sort().join() === [...candidate].sort().join();
}

function anagram(word, list) {
  return list.filter(candidate => isAnagram(word, candidate));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]