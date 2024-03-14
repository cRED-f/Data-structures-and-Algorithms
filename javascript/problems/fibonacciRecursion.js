//Given  a number return the index value of the Fibonacci sequence, where the sequence is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144...
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

const fibonacciItretive = (num) => {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
};
console.log(fibonacciItretive(4));

const fibonacciRecursive = (num) => {
  if (num < 2) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};

console.log(fibonacciRecursive(3));
