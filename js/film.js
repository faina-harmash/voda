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



/*Function Change rating*/
const myNumber = 5;
console.log(myNumber);

filmData.isWatched = confirm("have you watched this movie?");
alert(filmData.isWatched);
console.log(filmData);


















