let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 4) return console.log("done!");
  counter++;
  return inception();
}
inception();
