// [2,4,6,8,10]
//TC-0(n^2)
//SC-0(1)
const pairsArr = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    let currentNum = a[i];
    for (let j = i + 1; j < a.length; j++) {
      console.log(`(${currentNum} , ${a[j]}) \n`);
    }
  }
  console.log("Total pairs: " + (a.length * (a.length - 1)) / 2);
};
let a = [2, 4, 6, 8, 10];
pairsArr(a);
