/*to do function with 4 arguments (1-name,2-name,3-frequency of1, 4-frequency of2)
nameFrequency("Skorini", "Faini", 2, 3) -> SkoriniSkoriniFainiFainiFaini*/

("use strict");
function nameFrequency(firstName, secondName, firstFrequency, secondFrequency) {
    let result = "";
    for (let i = 0; i < firstFrequency; i++) {
      result = result.concat(firstName);
    }
    for (let i = 0; i < secondFrequency; i++) {
      result = result.concat(secondName);
    }
    return result;
  }
  
  let firstName = "Honey";
  let secondName = "Milk";
  let firstFrequency = 5;
  let secondFrequency = 3;
  let result = nameFrequency(
    firstName,
    secondName,
    firstFrequency,
    secondFrequency
  );
  console.log(result);