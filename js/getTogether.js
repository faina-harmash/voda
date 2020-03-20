/*1 - 2firstletters and 2 - 2secondletters*/

"use strict";
function getTogether(firstWord, secondWord) {
  let result = "";
  result = firstWord.slice(0, 2) + secondWord.slice(-2);

  return result;
}
let firstWord = "Пташка";
let secondWord = "Пiвник";
getTogether(firstWord, secondWord);

/*let the same but with if the word has less than two letters return whole word*/

function getTogether(firstWord, secondWord) {
  let result = "";
  for (i = 0; i < firstWord.length; i++) {
    if (firstWord.length < 2) {
      result = firstWord + secondWord.slice(-2);
    } else if (firstWord.length > 2) {
      result = firstWord.slice(0, 2) + secondWord.slice(-2);
    }
  }
  return result;
}
let firstWord = "ш";
let secondWord = "u";
getTogether(firstWord, secondWord);
