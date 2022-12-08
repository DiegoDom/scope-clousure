//? ECMA Script 6 se introdujeron las palabras let & const

//! Un bloque comunmente esta dentro de {} -> if(true) { **BLOQUE** }

function fruits() {
  if (true) {
    var fruit1 = "🍎"; //! FUNCTION SCOPE
    let fruit2 = "🥝"; //! BLOCK SCOPE
    const fruit3 = "🍌"; //! BLOCK SCOPE

    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
}

fruits();
