function play(index, message, num) {
  let i = 1;
  while (i < index) {
    console.log(i);
    if (i % num === 0) {
      console.log(message);
    }
    i++;
  }
}

function playFor(index, message, num) {
  for (let i = 1; i < index; i++);
}

let myNumber = 7;
let myName = "Faechka";
let myGreetings = "Hello " + myName;

function greetings(name) {
  let result = "hello" + " " + name;
  return result;
}
greetings("Faja");

//
function greetingsCount(count) {
  let phrase = "Hello X";
  for (let i = 1; i < count; i++) {
    console.log(phrase);
  }
}
greetingsCount(5);
// x>20 = "hot"; x>10 && x<20 = "warm"; x<10 = "cold"

function temperatureFeedback(degrees) {
  if (degrees > 20) {
    return "hot";
  } else if (degrees >= 10 && degrees <= 20) {
    return "warm";
  } else if (degrees < 10) {
    return "cold";
  }
}
temperatureFeedback(15);

//
function temperatureFeedbackAdvanced(degrees) {
  if (degrees > 20) {
    return "hot";
  } else if (degrees >= 10) {
    return "warm";
  } else {
    return "cold";
  }
}
temperatureFeedbackAdvanced();

//
function idealTemperature(degrees, idealTemperature) {
  if ((degrees = idealTemperature)) {
    return "ideal";
  } else if (degrees >= 10) {
    return "warm";
  } else if (degrees > 20) {
    return "hot";
  } else {
    return "cold";
  }
}
idealTemperature(10, 10);

//Floor
function getRealFloor(n) {
  if(n===0){
  return(0);
  } else if(n>o && n<=12) {
  return(n-1);
  } else if(n===13) {
  return("here is no 13th floor");
  } else if(n>13) {
  return(n-2);
  } else if(n<0) {
  return(n);
  } else{
    return("You should put a number");
  }
}
getRealFloor(15);
