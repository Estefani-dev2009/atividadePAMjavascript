// controle de acesso utilizando o operador && ou E

let temIdade = true;
let temAutorizacao = false;

if (temIdade && temAutorizacao) {
    console.log("Acesso concedido");
    console.log(Math.floor(Math.random() * 1000000))


} else {
    console.log("Acesso negado");
}