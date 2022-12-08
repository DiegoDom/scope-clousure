/* El ambito lexico se refiere a que la accesibilidad de las variables
   está determinada por la posición de las mismas dentro de los ambitos anidados
*/

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  //! funcion interna
  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
