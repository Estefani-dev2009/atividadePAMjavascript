// calculo de expoente com o do while

let base = 10;
let expoente= 3;
let resultado=1;
let i=0;

do {
  resultado=resultado*base;
i++;

} while (i < expoente);

console.log(base + " elevado a " + expoente + " é: " + resultado);