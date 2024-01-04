class ReverseArray {
  constructor(a) {
    this.a = a;
  }
  reverse() {
    let first = 0;
    let last = this.a.length - 1;
    while (first < last) {
      let temp = this.a[first];
      this.a[first] = this.a[last];
      this.a[last] = temp;
      first++;
      last--;
    }
    return this.a;
  }
}
let a = [1, 3, 6, 4, 9, 7];
const myArr = new ReverseArray(a);
console.log(myArr.reverse());
