/*Среднее значение по рейтингу */

"use strict";
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
