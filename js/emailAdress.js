/*func(firstName, secondName, separator) |  func("aa", "bb", "@") -> aa@bb |  func(String, String, String) -> String*/

"use strict";
function emailAdress(firstName, secondName, separator) {
  let result = firstName + separator + secondName;
  return result;
}
let firstName = "Faina";
let secondName = "Harmash";
let separator = "@";
let result = emailAdress(firstName, secondName, separator);
console.log(result);

//
let firstName = "Faina";
let secondName = "Harmash";
let separator = "@";
emailResult = firstName + separator + secondName;

console.log(emailResult);
