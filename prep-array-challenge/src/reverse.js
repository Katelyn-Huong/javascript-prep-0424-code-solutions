/* exported reverse */
function reverse(array) {
  let newArray = [];
  if (array.length > 0) {
    for (let index = array.length - 1; index >= 0; index--) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
