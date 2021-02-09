"use strict";

console.log("arr" + " - obj");

// вывод значений +1 и -1, "++" это +1, "--" это -1
let incr = 10,
  decr = 10;

incr++;
decr--;
console.log(incr, decr);
// тоже самое
++incr;
--decr;
console.log(incr, decr);
// так тоже можно, но только в начале
console.log(++incr, --decr);

// вывод остатка
console.log(5 % 2);

// утверждаемся, что 2*4 ровно 8, тут можно сравнивать числа и строки
console.log(2 * 4 == 8);
// а тут только одинаковые формы
console.log(2 * 4 === "8");

// && - и, когда вырожение правдиво
const isChecked = true,
  isClose = true;
console.log(isChecked && isClose);
// || - или, когда один из аргументов правдив
const isChecked2 = true,
  isClose2 = false;
console.log(isChecked2 || isClose2);
