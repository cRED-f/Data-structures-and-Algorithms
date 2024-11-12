const tw = (a) => {
  let length = a.length;

  //left auxiliary array
  let leftAux = [];
  leftAux[0] = a[0];
  for (let i = 1; i < length; i++) {
    leftAux[i] = Math.max(a[i], leftAux[i - 1]);
  }
  //right auxiliary array
  let rightAux = [];
  rightAux[length - 1] = a[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightAux[i] = Math.max(a[i], rightAux[i + 1]);
  }

  //loop
  let trappedWater = 0;
  //waterlevel=min of->(leftmax , rightmax)
  //trapped water=(water level - height ) * width
  for (let i = 0; i < length; i++) {
    waterLevel = Math.min(leftAux[i], rightAux[i]);
    trappedWater += waterLevel - a[i];
  }
  console.log(trappedWater);

  // for (let i = 0; i < length - 1; i++) {
  //   if (leftAux[i] > rightAux[i]) trappedWater.push(rightAux[i] - a[i]);
  //   else trappedWater.push(leftAux[i] - a[i]);
  // }
  //total water
  // let sum = trappedWater.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );
  // console.log(sum);
};

let a = [4, 2, 0, 6, 3, 2, 5];
tw(a);
