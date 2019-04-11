/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxStr = "";
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > maxStr.length) {
      maxStr = words[i];
    }
  }
  return maxStr.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");