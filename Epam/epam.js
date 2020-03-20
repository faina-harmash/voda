// 1,2,undefined,nothing = (2)
// Функция затирается
let button = document.getElementById("button");
button.onclick = function() {
  alert(1);
};
button.onclick = function() {
  alert(2);
};
// In what order console log ? = (1,4,3,2)
// Сначала выполяется console.log,
//а потом setTimeout в порядке зависимости от времени
function print() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 5000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}
// print();
// What will be returned first console.log?
// = undefined, stop,
// ибо var всплывает в самой функции со значением undefined,
// a потом выводит значение true, которое равно stop
var a = "wrong";
function b() {
  console.log(a);
  if (!a) {
    var a = "stop";
  }
  console.log(a);
}
b();
// What value is alerted = 3
function foo(a) {
  alert(arguments.length);
}
foo(1, 2, 3);

// What value is alerted = 3
// = 2, arr.foo не влияет
var arr = [];
arr[0] = "a";
arr[1] = "b";
arr.foo = "c";
alert(arr.length);
// typeOf(NaN) = number
// typeOf(null) = object

// What does console.log output

var globalVar = "global";
function test1() {
  console.log(globalVar);
  return;
  var globalVar;
}
test1();

// What will be returned by code?
var name = "wrong";
function lol() {
  return "1st";
}
function Person(val) {
  this.name = "koni";
  return "2nd";
}
alert(new Person().name);

//
var result = "ten" * 2;
console.log(result==NaN);
//VM26368:2 false
