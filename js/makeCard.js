"use strict";

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
    return 0 + String(month);
  } else {
    return month;
  }
}

makeCard("VISA", "Faina", "Harmash");
