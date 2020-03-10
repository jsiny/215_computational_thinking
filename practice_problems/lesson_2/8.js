function isBalanced(string) {
  let parentheses = string.replace(/[^()]/g, '');
  let count = 0;

  for (let i = 0; i < parentheses.length; i += 1) {
    count = parentheses[i] === '(' ? count + 1 : count - 1;
    if (count < 0) return false;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
