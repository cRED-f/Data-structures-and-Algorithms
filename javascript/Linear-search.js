// [1,3,6,4,9,7]
//search 6
//TC-O(n)
//SC-O(1)
class LinearSearch {
  constructor(value, a) {
    this.value = value;
    this.a = a;
  }
  search() {
    for (let i = 0; i < this.a.length; i++) {
      if (this.value === this.a[i]) {
        return 1;
      }
    }
    return -1;
  }
  printSearch() {
    if (this.search() === 1) return console.log("Found");
    else return console.log("Not Found");
  }
}
const a = [1, 3, 6, 4, 9, 7];
const value = 6;
const ls = new LinearSearch(value, a);
ls.printSearch();
