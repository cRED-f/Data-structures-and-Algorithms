//binary search
//[1,3,6,4,9,7]
//must be sorted array
//TC-0(logn)
class BinarySearch {
  constructor(a) {
    this.a = a;
  }

  search(key) {
    let start = 0;
    let end = this.a.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      //comparison
      if (this.a[mid] === key) {
        return "Found";
      } else if (this.a[mid] > key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return "Not Found";
  }
}
let a = [1, 3, 4, 6, 9];
const mySearch = new BinarySearch(a);
console.log(mySearch.search(9));
