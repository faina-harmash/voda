//Создать функцию которая принимает 1 аргумент - строку.
//Функция должна возвращать строку в которой:
//1. Между каждым символом стоит дефис.
//Vlad HW.

("use strict");
function transformString(sentense) {
    const transform = sentense.split("");
    const result = transform.join("-");
    console.log(result);
  }
  transformString("Ладушки и варенье");
  
  //the same but without function
  let smak = "Ладушки и варенье";
  let transform = smak.split("");
  let result = transform.join("-");
  console.log(result);
  
  //2. Последнее слово написано большими буквами.
  
  let smak = "Ладушки и варенье";
  let transform = smak.split(" ");
  transform[transform.length - 1] = transform[transform.length - 1].toUpperCase();
  let result = transform.join(" ");
  let dashArray = result.split("").join("-") + "-";
  
  console.log(dashArray);
  
  //let spaceIndex = result.lastIndexOf("");
  
  //3. Advanced
  
  function phraseFormatter(phrase) {
    let result = "";
    let lastIndexOfSpace = phrase.lastIndexOf(" ");
    for (let i = 0; i < phrase.length; i++) {
      let currentSymbol = phrase.charAt(i);
      if (i > lastIndexOfSpace) {
        result = result.concat(currentSymbol.toUpperCase());
      } else {
        result = result.concat(currentSymbol);
      }
      result = result.concat("-");
    }
    return result;
  }
  
  let phrase = "Faini js monster";
  phraseFormatter(phrase);