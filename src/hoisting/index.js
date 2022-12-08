/* //! HOISTING
  var dogName; // Realiza esto antes de el console log automaticamente
*/
console.log(dogName);
var dogName = "Yami";
console.log(dogName);

/* //! HOISTING
  var yami; // Se elevo la variable yami = undefined
  getDogName: Se eleva en tiempo de asignación y compilación
*/
getDogName();
function getDogName() {
  console.log(`El mejor perro es ${yami}`);
}

var yami = "Yami";
