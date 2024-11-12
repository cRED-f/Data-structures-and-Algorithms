//write a function that returns the factorial of any number. one should use recursive approach and the other should use
// a for loop

function findFactorialRecursive(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  if (number === 2) return 2;
  return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  answer = 1;
  for (let i = 1; i <= number; i++) {
    answer = answer * i;
  }
  return console.log(answer);
}

findFactorialIterative(0);

// 2 / 3 =6 /4 =24
