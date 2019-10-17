'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fibonacci(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, value);
  return value;
}
const length = 20;
for (let i = 1; i <= length; i++) {
  console.log(fibonacci(i));
}