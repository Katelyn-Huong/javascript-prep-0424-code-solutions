/* exported capitalize */
function capitalize(word) {
  if (word) {
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord;
  } else {
    return undefined;
  }
}
