"use strict";
const filmData = {
    name: "Friends",
    startYear: 1994,
    endYear: 2004,
    genre: ["comedy","romance"],
    country: "USA",
    runtime: "22 minutes",
    language: "english",
    seasons: 10,
    budget: undefined,
    actors: undefined,
    isWatched: undefined,
    rate: undefined,
    rates: []
}



function addRatePush(rate) {
    filmData.rates.push(rate);
}

function addRateConcat(rate) {
    filmData.rates = filmData.rates.concat(rate);
}

function add(x, y) {
    return x+y;
}

function countElements(m) {
    return m.length;
}

function calculateSum(...rates) {
    let result=0;
    for (let i = 0; i < rates.length; i++) {
        const element = rates[i];
        
    }
    
}

function calculateAverage() {

}

function setRate(newRate) {
    filmData.rate = newRate;
}










const myNumber = 5;
console.log(myNumber);

filmData.isWatched = confirm ("have you watched this movie?")
alert( filmData.isWatched);
console.log(filmData);

