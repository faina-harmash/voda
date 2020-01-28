/*Написать функцию makeCard. 
Она принимает 3 аргумента и возвращает объект как на скриншоте.
Месяц должен быть выбран случайно при запуске функции и всегда состоять из двух чисел. 
Год должен быть выбран случайно из таких чисел 30, 29, 28, 34.
CVV должен всегда состоять из 3 чисел и быть случайным.
Если в функцию не передать имени и фамилии она будет без имени.*/

function makeCard(cardType, firstName, secondName) {
  let cardInfo = {};
  if (
    typeof cardType !== "string" ||
    typeof firstName !== "string" ||
    typeof secondName !== "string"
  ) {
    let errorMessage =
      "Please use letters for all fields. Your input is Incorrect!";
    return errorMessage;
  }
  cardInfo.type = cardType.toUpperCase().trim();
  if (firstName !== undefined && secondName !== undefined) {
    cardInfo.name =
      firstName.toUpperCase().trim() + " " + secondName.toUpperCase().trim();
  }
  cardInfo.expire = `${randomMonth()}/${randomYear()}`;
  cardInfo.cvv = +randomCvv();
  return cardInfo;
}

function randomNumber(min, max) {
  let randomPart = Math.random() * (max - min);
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

// что бы с 0 начинался
function randomMonth() {
  let month = "month";
  month = randomNumber(1, 12);
  if (randomNumber < 10) {
    return 0 + month;
  } else {
    return month;
  }
}

makeCard("VISA", "Faina", "Harmash");
