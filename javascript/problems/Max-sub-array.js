//[2,4,6,8,10]

/* traditional way */
// const MaxSubArr = (a) => {
//   let maxValue = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < a.length; i++) {
//     let currentNum = 0;
//     for (let j = i; j < a.length; j++) {
//       //subarray sum
//       currentNum += a[j];
//       if (currentNum > maxValue) maxValue = currentNum;
//     }
//   }
//   console.log(maxValue);
// };
// let a = [2, 4, 6, 8, 10];
// MaxSubArr(a);

/* using kadans law */
//TC-0(n)
//sc-0(1)
const MaxSubArr = (a) => {
  let maxValue = 0;
  let currentNum = 0;
  for (let i = 0; i < a.length; i++) {
    currentNum = currentNum + a[i];
    if (currentNum < 0) {
      currentNum = 0;
    } else {
      if (currentNum > maxValue) maxValue = currentNum;
    }
  }
  console.log(maxValue);
};
let a = [-2, -3, 4, -1, -2, 1, 5, -3];
MaxSubArr(a);
