
  if (typeof wife !== "string" || typeof husband !== "string") {
    let errorMessage =
      "Please use letters for all fields. Your input is Incorrect!";
    return errorMessage;
  } else {
    return family;

//

("use strict");
function createFamily(wife, husband) {
    
  let family = {
    wife: wife.trim(),
    husband: husband.trim(),
    children: [],
    makeChild: function makeChild(name) {
      let children = {
        name: name,
        parents: `${this.wife} and ${this.husband}`
      };
      this.children.push(children);
    }
  };
  if (typeof wife !== "string" || typeof husband !== "string") {
    let errorMessage =
      "Please use letters for all fields. Your input is Incorrect!";
    return errorMessage;
  } else{
  return family;
  }
}
let family = createFamily("Sisi", "John");
family.makeChild("Fedor");
family.wife = "Ann";
console.log(family);
