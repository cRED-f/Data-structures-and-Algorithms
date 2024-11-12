//[2,4,6,8,10]
const subArr = (a) => {
  for (let i = 0; i < a.length; i++) {
    let start = i;
    for (let j = i; j < a.length; j++) {
      let end = j;
      for (let k = start; k <= end; k++) {
        console.log(`${a[k]}`);
      }
    }
  }
};
let a = [2, 4, 6, 8, 10];
subArr(a);
