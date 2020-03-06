let count = [1, 2, 3, 4, 5];

function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

function logger(number) {
  console.log(number);
}

function oddOrEven(array) {
  array.forEach(number => {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

iterate(count, logger);
oddOrEven(count);