// Create a fucntion that reverses a string;
// "hi my name is fahim" should be:
// "mihaf si eman ym ih"

// Solution 1(without built in methods)
function reverseString(str) {
  if (!str || str < 2 || typeof str !== "string") {
    return "Something wrong in your input";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards);
  return backwards.join("");
}

console.log(reverseString("hi my name is fahim"));

//Solution 2(with built in method)
function reverseString2(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString2("Hi my name is fahim"));

//javaScript ES6 version
const reverseString3 = (str) => str.split("").reverse().join("");

console.log(reverseString3("hi my name is fahim"));
