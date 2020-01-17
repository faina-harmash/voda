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

function getRecommendationSwitch(rateSwitch) {
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
}

//Написать функцию play, которая принимает 3 аргумента. Работать должна следующим образом:
let length = 10;
let phrase = "Боги джаваскрипта, сжальтесь";
let startPhrase = 4;

console.log(length);
for (let i = 1; i < length; i++) {
  console.log(i);
  if (i % period == 0) {
    console.log(phrase);
  }
}
