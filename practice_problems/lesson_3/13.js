// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
--- PROBLEM ---
input: string (phone number)
output: string of digits

rules:
- for invalid values, return 10 "0"s
- invalid number if:
-- less than 10 digits
-- more than 11 digits
-- 11 digits, with the first one not being a 1

--- DATA STRUCTURE ---
- will probably keep the input as a string
- use a regex to clean the input string

--- ALGORITHM ---
- clean up the string to remove all dots, spaces, dashes, parentheses
- check that the string is valid
-- if not, return 10 '0's
- else, return the cleaned up string
-- if 11 digits, remove the initial 1

*/

function isValidPhoneNumber(num) {
  return /^1?(\d){10}$/.test(num);
}

function cleanNumber(string) {
  let phoneNumber = string.replace(/\D/g, '');

  if (!isValidPhoneNumber(phoneNumber)) return '0'.repeat(10); 

  return phoneNumber.length === 10 ? phoneNumber : phoneNumber.slice(1);
}

console.log(cleanNumber('0123456789')       === '0123456789');
console.log(cleanNumber('012 345 6789')     === '0123456789');
console.log(cleanNumber('012.345.6789')     === '0123456789');
console.log(cleanNumber('012-345-6789')     === '0123456789');
console.log(cleanNumber('10123456789')      === '0123456789');
console.log(cleanNumber('1 (012) 345-6789') === '0123456789');
console.log(cleanNumber('30123456789')      === '0000000000');
console.log(cleanNumber('01234567')         === '0000000000');
console.log(cleanNumber('0123456789012')    === '0000000000');
console.log(cleanNumber('hello')            === '0000000000');
