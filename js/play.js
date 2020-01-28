/*Написать функцию play, которая принимает 3 аргумента.*/

("use strict");
function play(length, phrase, startPhrase) {
  for (let i = 1; i < length; i++) {
    console.log(i);
    if (i % startPhrase === 0) {
      console.log(phrase);
    }
  }
}
let errors = [];
play(16, "Боги Джаваскрипта сжальтесь", 4);
