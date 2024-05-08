/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  let isVowel = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < isVowel.length; index++) {
    if (char === isVowel[index]) {
      return true;
    }
  }
  return false;
}
