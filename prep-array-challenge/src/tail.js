/* exported tail */
function tail(array) {
  let newArray = [];
  if (array.length > 1) {
    for (let index = 1; index < array.length; index++) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
