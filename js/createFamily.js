"use strict";

function createFamily(wife, husband) {
  if (typeof wife !== "string" || typeof husband !== "string") {
    
    return "Please use letters for all fields. Your input is Incorrect!";
  }

  return {
    wife,
    husband,
    children: [],
    makeChild: function makeChild(name) {
      let children = {
        name,
        parents: `${this.wife} and ${this.husband}`
      };
      this.children.push(children);
    }
  };
}
let family = createFamily("Sisi", "John");
family.makeChild("Fedor");
family.wife = "Ann";
console.log(family);
