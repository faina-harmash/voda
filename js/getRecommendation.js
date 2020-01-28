/* 1. Создать функцию которая принимает в качестве аргумента рейтинг, а возвращает строку с сообщением.*/

("use strict");
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
