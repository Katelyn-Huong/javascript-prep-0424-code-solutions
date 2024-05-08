/* exported isUpperCased */
function isUpperCased(word) {
  let upperCasedWord = word.toUpperCase();
  if (upperCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
