/*Функция принимает число,возвращает true, если число делится на 3 или 5 или 7 без остатка 
false - во всех остальных случаях */

"(use strict)";
function isSimple(num) {
  if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
isSimple(3);

// without else

("(use strict)");
function isSimple(num) {
  if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
}
isSimple(3);

// without if

("(use strict)");
function isSimple(num) {
  let result = num % 3 === 0 || num % 5 === 0 || num % 7 === 0;
  return result;
}

isSimple(3);
