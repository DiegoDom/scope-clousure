//? Variables
var a; //! Declarando la variable
var b = "b"; //! Declarando y asignando
b = "B"; //! Reasignado
var a = "aa"; //! Redeclaración

//? GLOBAL SCOPE
//? Cualquier variable que se encuentra en el documento pasan a ser globales y se instancean dentro del objeto 'window'

var fruit = "🍎"; //! GLOBAL

console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

//! Cuando no declaramos una variable y simplemente la asignamos por defecto pasa a ser una variable globlal
function countries() {
  country = "México"; //! PASA A SER GLOBAL
  console.log(country);
}

countries();
console.log(country);
