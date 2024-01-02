//hash table

let user = {
  age: 33,
  name: "asly",
  bang: true,
  scream: () => console.log("ahhhhhhh!"),
};

console.log(user.age); //0(1)
console.log((user.spell = "abra kadabra")); //0(1)
user.scream(); //0(1)
