/*четные - маленькие буквы, нечетные - большие  func(String) -> String*/

"use strict";
function lowerOrUpper(letters) {
  let result = "";
  for (i = 0; i < letters.length; i++) {
    let currentLetter = letters.charAt(i);
    if (i % 2 === 0) {
      result = result.concat(currentLetter.toUpperCase());
    } else {
      result = result.concat(currentLetter.toLowerCase());
    }
  }

  return result;
}
let letters = "javascript";
lowerOrUpper(letters);
