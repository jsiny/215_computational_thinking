function myReduce(array, func, initial) {
  let i;
  let value;
  
  if (initial === undefined) {
    value = array[0];
    i = 1;
  } else {
    value = initial;
    i = 0;
  }

  for (i; i < array.length; i += 1) {
    value = func(value, array[i]);
  }

  return value;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"