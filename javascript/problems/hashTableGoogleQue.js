//Google question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
//Given an array = [2,3,4,5]:
//It should return undefined

const recurringNum = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = 1 + i; j < num.length; j++) {
      if (num[i] === num[j]) return num[i];
    }
  }
  return undefined;
};

console.log("without hashing->> " + recurringNum([2, 1, 1, 2, 3, 5, 1, 2, 4]));
//this is traditional approach with 0(n^2) time complexity

//using hash table

const recurringNum2 = (num) => {
  let map = {};
  for (i = 0; i < num.length; i++) {
    if (map[num[i]] !== undefined) {
      return num[i];
    } else {
      map[num[i]] = i;
    }
  }
}; //0(n)
console.log("with hashing->> " + recurringNum2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
