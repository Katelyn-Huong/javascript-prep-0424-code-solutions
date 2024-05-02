/* exported initial */
function initial(array) {
  let newArray = [];
  if (array.length > 1) {
    for (let index = 0; index < array.length - 1; index++) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
