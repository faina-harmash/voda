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
    budget: "null",
    actors: "undefined",
}
// filmData ['rating']= 5
// filmData.age ['18']= false
// filmData.age ['12']= true

filmData.name = confirm ("have you watched this movie?")
alert( filmData.name);
console.log(filmData);

