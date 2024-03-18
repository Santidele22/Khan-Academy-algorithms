/*
La computadora seleccionará aleatoriamente un número entero entre 1 y 15. 
Tu seguirás adivinando números hasta encontrar el número de la computadora, 
y la computadora te dirá cada vez si tu intento es demasiado alto o demasiado bajo
}*/

//Numero aleatorio entre 1 y 15
const ramdonNumber = Math.floor(Math.random() * (15 - 0 + 1) + 1);

function gameOver() {
  let attempts = 4;
  if (attempts === 1) {
    console.log("Perdiste rey te quedaste sin intentos");
    return;
  } else {
    attempts--;
  }
  console.log("Te quedan " + attempts + " intentos");
}

function gameRools(num) {
  if (num === ramdonNumber) {
    console.log("Adivinaste", num);
    console.log("El numero ramdon era:", ramdonNumber);
  } else if (num < ramdonNumber) {
    console.log("El numero es muy bajo", num);
    gameOver();
  } else if (num > ramdonNumber) {
    console.log("El numero es muy grande", num);
    gameOver();
  }
}

function guessingGame(num) {
  while (1) {
    gameRools(num);
  }
}

guessingGame(4);
