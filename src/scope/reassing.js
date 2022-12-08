/* VAR */
var firstName; //? valor por defecto undefined
firstName = "DAL";

var lastName = "DOM"; //? Declarar y asignar
lastName = "DOMINGUEZ"; //? Reasignar

console.log({ firstName, lastName });

var middleName = "ALBERT"; //? Declarando y asignando
var middleName = "Alberto"; //? reasignando
console.log({ middleName });

/* LET */
let fruit = "🍎"; //? Declarar y asignar
fruit = "🥝";
console.log({ fruit });

let fruit = "🍌"; //! Con let no puedes redeclarar

/* CONST */
const animal = "🐺"; //? Declarar y asignar
animal = "🐵"; //! Con CONST NO puedes reasignar
const animal = "🦆"; //! Con CONST NO puedes redeclarar
console.log({ animal });

const vehicles = []; //? Declarando y asignando
vehicles.push("🚗"); //? PUSH apunta a la referencia de la constante y por eso se pueden insertar valores
console.log({ vehicles });

vehicles.pop(); //? POP apunta a la referencia de la constante y por eso se pueden MANIPULAR los valores
console.log({ vehicles });
