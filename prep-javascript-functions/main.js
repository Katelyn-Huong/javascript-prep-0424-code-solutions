function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(3, 4);
console.log(sum);

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
const minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  const greeting = 'Hello, ';
  return greeting + name + '!';
}
console.log(getGreeting('Katelyn'));

function addAndMultiplyBy5(num1, num2) {
  const sumTimesFive = (num1 + num2) * 5;
  return sumTimesFive;
}
console.log(addAndMultiplyBy5(2, 2));

function multiplyAndDivideBy5(num1, num2) {
  const productDivideByFive = (num1 * num2) / 5;
  return productDivideByFive;
}
console.log(multiplyAndDivideBy5(6, 5));

function subtractTwoNumbers(num1, num2) {
  const difference = num1 - num2;
  return difference;
}
console.log(subtractTwoNumbers(10, 5));

function getCircleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}
const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  const fullName = firstName + '' + lastName;
  return fullName;
}
console.log(getFullName('Katelyn', ' Ngo'));

function cube(number) {
  return number * number * number;
}
const result = cube(5);
console.log(result);
