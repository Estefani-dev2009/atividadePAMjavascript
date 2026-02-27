/*Exercicio: Ler um vetor A com 20 elementos. Separar os elementos pares e ímpares de 
A utilizando apenas um vetor extra B. */

let vetorA = new Array(20);
let vetorB = new Array(20);

let elemento = 0;

for (cont = 0; cont < 20; cont++) {
    vetorA[cont] = Math.floor(Math.random() * 100);
}

contB = 0;

console.log('');

console.log('Números Par');

for (cont = 0; cont < 20; cont++) {

    if (vetorA[cont] % 2 == 0) {
        vetorB[contB] = vetorA[cont] + 0;

        if (vetorB[contB] < 10) {
            console.log(contB + '° - ' + vetorB[contB] + '  - Par');
        } else {
            console.log(contB + '° - ' + vetorB[contB] + ' - Par');
        }
        contB++;

    }
}

console.log('');


if (contB < 20) {
    console.log('Números Impar');
    for (cont = 0; cont < 20; cont++) {

        if (vetorA[cont] % 2 == 1) {
            vetorB[contB] = vetorA[cont]

            console.log(contB + '° - ' + vetorB[contB] + ' - Impar');
            contB++;

        }

    }

}    