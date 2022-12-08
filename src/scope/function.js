//? Todas las funciones que declaremos van a tener su propio alcance
/* las variables declaradas dentro de esta función van a ser accesibles solo dentro de esta función
y en cualquiera de sus funciones anidadas */
function greeting() {
  let userName = "Taylor";
  console.log(userName);

  if (userName === "Taylor") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();

console.log(userName); //! ReferenceError: userName is not defined
