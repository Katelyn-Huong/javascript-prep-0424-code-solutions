function whileLoop1() {
  let newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}
let whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let newArray = [];
  let index = 0;
  while (index < 20) {
    newArray.push(index);
    index += 2;
  }
  return newArray;
}
let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  let newArray = [];
  for (let index = 0; index < 10; index++) {
    newArray.push(index);
  }
  return newArray;
}
let forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index >= 0; index--)
    console.log('Time till explosion:' + index);
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
