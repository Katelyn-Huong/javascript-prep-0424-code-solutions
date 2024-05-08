/* exported reverseWord */
function reverseWord(word) {
  let reverseWord = '';
  for (let index = word.length - 1; index >= 0; index--) {
    reverseWord += word[index];
  }
  return reverseWord;
}
