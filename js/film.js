"use strict";
const filmData = {
  name: "Friends",
  startYear: 1994,
  endYear: 2004,
  genre: ["comedy", "romance"],
  country: "USA",
  runtime: "22 minutes",
  language: "english",
  seasons: 10,
  budget: undefined,
  actors: undefined,
  isWatched: undefined,
  rate: undefined,
  rates: []
};

console.log(filmData);

//do code here
addRatePush(4);
addRateConcat(7);

console.log("Done");

function setNewRate(rate) {
  filmData.rate = rate;
}

function addRatePush(rate) {
  filmData.rates.push(rate);
}
function addRateConcat(rate) {
  filmData.rates = filmData.rates.concat(rate);
}

function add(x, y) {
  return x + y;
}

function countElements(m) {
  return m.length;
}

function calculateSum(...rates) {
  let result = 0;
  for (let i = 0; i < rates.length; i++) {
    const element = rates[i];
  }
}

function calculateAverage() {}

//Function Change rating
const myNumber = 5;
console.log(myNumber);

filmData.isWatched = confirm("have you watched this movie?");
alert(filmData.isWatched);
console.log(filmData);

// 1. Создать функцию которая принимает в качестве аргумента рейтинг, а возвращает строку с сообщением.
//На каждую цифру рейтинга нужно придумать уникальное сообщение. Чем больше сообщений, тем лучше.
// getRecommendation(5) // ‘Оличный фильм, нужно смотреть!’
// getRecommendation(1) // ‘Фильм полное дно, смотреть не стоит!’

let rate = prompt("How much did you like the movie", "10");
function getRecommendation(rate) {
  if (rate == 1) {
    return "Хочешь потратить время зря, тогда этот фильм точно для тебя!";
  } else if (rate == 2) {
    return "Нужно дома убрать и ты ищешь фон, welcome to watch this!";
  } else if (rate == 3) {
    return "Хочешь заснуть, welcome!";
  } else if (rate == 4) {
    return "Можешь пролистать Instagram пока смотришь!";
  } else if (rate == 5) {
    return "Где-то между 'Поле чудес' и 'Сумерками'!";
  } else if (rate == 6) {
    return "Вот это актерский состав!";
  } else if (rate == 7) {
    return "Однако хорошо снято!";
  } else if (rate == 8) {
    return "Вот это сюжет!";
  } else if (rate == 9) {
    return "Какой атмосферный фильм!";
  } else if (rate == 10) {
    return "А можно ещё раз пересмотреть!";
  }
}

alert(getRecommendation(rate));

//Конструкция "switch"
let rate = +prompt("How much did you like the movie", "From 1 to 10");

const message = getRecommendationSwitch(rate);
alert(message);

const getRecommendationSwitch = function(rateSwitch) {
  let numb = Math.floor(rateSwitch);
  switch (numb) {
    case 1:
      return "Хочешь потратить время зря, тогда этот фильм точно для тебя!";
    case 2:
      return "Нужно дома убрать и ты ищешь фон, welcome to watch this!";
    case 3:
      return "Хочешь заснуть, welcome!";
    case 4:
      return "Можешь пролистать Instagram пока смотришь!";
    case 5:
      return "Где-то между 'Поле чудес' и 'Сумерками'!";
    case 6:
      return "Вот это актерский состав!";
    case 7:
      return "Однако хорошо снято!";
    case 8:
      return "Вот это сюжет!";
    case 9:
      return "Какой атмосферный фильм!";
    case 10:
      return "А можно ещё раз пересмотреть!";
    default:
      return "Нужно ввести число от 1 до 10, для получения совета по фильму!";
  }
};

//Написать функцию play, которая принимает 3 аргумента.

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

//Создать функцию которая принимает 1 аргумент - строку.
//Функция должна возвращать строку в которой:
//1. Между каждым символом стоит дефис.

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

// to do function with 4 arguments (1-name,2-name,3-frequency of1, 4-frequency of2)
//nameFrequency("Skorini", "Faini", 2, 3) -> SkoriniSkoriniFainiFainiFaini

function nameFrequency(firstName, secondName, firstFrequency, secondFrequency) {
  let result = "";
  for (let i = 0; i < firstFrequency; i++) {
    result = result.concat(firstName);
  }
  for (let i = 0; i < secondFrequency; i++) {
    result = result.concat(secondName);
  }
  return result;
}

let firstName = "Honey";
let secondName = "Milk";
let firstFrequency = 5;
let secondFrequency = 3;
let result = nameFrequency(
  firstName,
  secondName,
  firstFrequency,
  secondFrequency
);
console.log(result);

// func(firstName, secondName, separator) |  func("aa", "bb", "@") -> aa@bb |  func(String, String, String) -> String
//try hard
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

//четные - маленькие буквы, нечетные - большие  func(String) -> String
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

//1 - 2firstletters and 2 - 2secondletters
function getTogether(firstWord, secondWord) {
  let result = "";
  result = firstWord.slice(0, 2) + secondWord.slice(-2);

  return result;
}
let firstWord = "Пташка";
let secondWord = "Пiвник";
getTogether(firstWord, secondWord);

//let the same but with if the word has less than two letters return whole word

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

/*Написать функцию makeCard. 
Она принимает 3 аргумента и возвращает объект как на скриншоте.
Месяц должен быть выбран случайно при запуске функции и всегда состоять из двух чисел. 
Год должен быть выбран случайно из таких чисел 30, 29, 28, 34.
CVV должен всегда состоять из 3 чисел и быть случайным.
Если в функцию не передать имени и фамилии она будет без имени.*/

//Написать функцию makeCard. Она принимает 3 аргумента и возвращает объект как на скриншоте.
function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  cardInfo.type = cardType.toUpperCase();
  cardInfo.name = firstName.toUpperCase() + " " + secondName.toUpperCase();

  return cardInfo;
}

makeCard("VISA", "Faina", "Harmash");

//Если в функцию не передать имени и фамилии она будет без имени.*/
function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  cardInfo.type = cardType.toUpperCase();

  if (firstName !== undefined && secondName !== undefined) {
    cardInfo.name = firstName.toUpperCase() + " " + secondName.toUpperCase();
  }
  return cardInfo;
}

makeCard("VISA");

//Месяц должен быть выбран случайно при запуске функции и всегда состоять из двух чисел.

function randomMonth(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let monthNumber = randomMonth(1, 12);

function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  cardInfo.type = cardType.toUpperCase();
  cardInfo.month = monthNumber;

  if (firstName !== undefined && secondName !== undefined) {
    cardInfo.name = firstName.toUpperCase() + " " + secondName.toUpperCase();
  }
  return cardInfo;
}

makeCard("VISA", "Faina", "Harmash");

//CVV должен всегда состоять из 3 чисел и быть случайным.
//CVV function

function randomCvv() {
  return Math.floor(Math.random() * 900) + 100;
}
let cvvNumber = randomCvv();

function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  cardInfo.type = cardType.toUpperCase();
  cardInfo.cvv = cvvNumber;

  if (firstName !== undefined && secondName !== undefined) {
    cardInfo.name = firstName.toUpperCase() + " " + secondName.toUpperCase();
  }
  return cardInfo;
}

makeCard("VISA", "Faina", "Harmash");

//Год должен быть выбран случайно из таких чисел 30, 29, 28, 34.

function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  cardInfo.type = cardType.toUpperCase();
  if (firstName !== undefined && secondName !== undefined) {
    cardInfo.name = firstName.toUpperCase() + " " + secondName.toUpperCase();
  }
  cardInfo.year = randomYear();
  cardInfo.cvv = randomCvv();
  cardInfo.month = randomMonth();
  return cardInfo;
}

function randomNumber(min, max) {
  let randomPart = Math.random() * (max - min);
  console.log(randomPart);
  return Math.floor(randomPart) + min;
}

function randomYear() {
  let yearArray = [30, 29, 28, 34];
  let randomIndex = randomNumber(0, yearArray.length);
  let yearNumber = yearArray[randomIndex];
  return yearNumber;
}

function randomCvv() {
  let cvv = "";
  cvv = cvv.concat(randomNumber(0, 10));
  cvv = cvv.concat(randomNumber(0, 10));
  cvv = cvv.concat(randomNumber(0, 10));
  return cvv;
}

function randomMonth(){
  let month = "";
  month = (randomNumber(1,12));
  return month;
}

makeCard("VISA", "Faina", "Harmash");
