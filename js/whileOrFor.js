"use strict";
// with for
function whileOrFor(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
whileOrFor(4);

// with while

function whileOrFor(num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
}
whileOrFor(3);

/*создать функцию принимает num

вывести на экран все числа от num до 0 включительно

1) использовать while
2) использовать for*/

// with for
function whileOrFor(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
whileOrFor(4);

// with while
function whileOrFor(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
whileOrFor(4);

// without if : from 0 to num (odd)
function withoutIf(num) {
  let i = 1;
  while (i <= num) {
    console.log(i);
    i += 2;
  }
}
withoutIf(10);

//
function withoutIf(num) {
  for (i = 1; i <= num; i += 2) {
    console.log(i);
  }
}
withoutIf(15);

// 1234 -> 1243
function twoWays(numbers) {
  for (i = 1; i <= numbers.length / 2; i++) {
    console.log(i);
  }
  for (i = numbers.length; i >= numbers.length / 2; i--) {
    console.log(i);
  }
}
twoWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Advanced

function twoWays(numbers) {
  for (i = 0; i < numbers.length / 2; i++) {
    console.log(numbers[i]);
  }
  for (i = numbers.length - 1; i >= numbers.length / 2; i--) {
    console.log(numbers[i]);
  }
}
twoWays(["10", "20", "30", "40", "50", "60", "70"]);

//Advanced +

function twoWays(numbers) {
  let a = numbers.length - 1;
  let border = numbers.length / 2;
  for (i = 0; i < border; i++) {
    console.log(numbers[i]);
    console.log(numbers[-i+a]);
  }
}
twoWays(["10", "20", "30", "50", "60", "70"]);