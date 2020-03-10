function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/gi.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false

// Foo@baz.com.ph
// Foo@mx.baz.com.ph
// foo@baz.com  
// foo@baz.ph   
// HELLO123@baz  
// foo.bar@baz.to
// foo@baz.    
// foo_bat@baz  
// foo@bar.a12   
// foo_bar@baz.com
// foo@bar.....com