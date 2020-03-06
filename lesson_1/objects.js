let obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach(key => {
  console.log(`key: ${key}, value: ${obj[key]}`);
})

// Output:
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3

let keys = Object.keys(obj);
// [ 'a', 'b', 'c' ]

let values = Object.keys(obj).map(key => obj[key]);
// [1, 2, 3]

function doubleObjectValues(obj) {
  let result = {};
  Object.keys(obj).forEach(key => result[key] = obj[key] * 2);
  return result;
}

doubleObjectValues(obj);
// { a: 2, b: 4, c: 6 }

function keepEvenValues(obj) {
  let result = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] % 2 === 0) result[key] = obj[key];
  })
  return result;
}

keepEvenValues(obj);
// { b: 2 }

function getTotalFromInvoice(invoice) {
  return Object.keys(invoice).reduce((result, element) => {
    result.total += invoice[element];
    return result;
  }, { total: 0 })
}

getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 });
// { total: 21000 }
