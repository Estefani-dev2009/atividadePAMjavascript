//acumalar o valor de 5 numeros do vetor usando uma variavel acumuladora

let num = [10,20,30,40,50];
let somaNum = 0; 

for(let i=0; i<num.length;i++){

    somaNum=somaNum+num[i];
}

console.log("A soma dos numeros é: " +somaNum);