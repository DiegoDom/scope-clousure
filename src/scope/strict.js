"use strict";

pi = 3.1416; //! Si no utilizamos el modo estricto el hoisting declara esta variable como var
console.log({ pi });

function myFunction() {
  "use strict";
  pi = 3.1416; //! Si no utilizamos el modo estricto el hoisting declara esta variable como var
  return pi;
}

console.log(myFunction());
