/*Конструкция "switch"*/

("use strict");
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
