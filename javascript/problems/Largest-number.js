//[1,2,6,9,3,6,8,4,6,7,6]
//TC-0(n)
//SC-0(1)
a = [1, 2, 6, 9, 3, 6, 8, 4, 6, 7, 6];
let largest = 0;
largestNumber = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (largest < a[i]) largest = a[i];
  }
};
largestNumber(a);
console.log(largest);
