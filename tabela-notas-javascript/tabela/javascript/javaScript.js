function calcularMedia(){

let tabela = document.getElementById("tabela");

let linhas = tabela.rows;

for(let i = 1 ;i < linhas.length; i++){

    let nota1 = Number(linhas[i].cells[1].textContent);
    let nota2 = Number(linhas[i].cells[2].textContent);
    let nota3 = Number(linhas[i].cells[3].textContent);

    let media = (nota1+nota2+nota3) / 3;
    
    linhas[i].cells[4].textContent = media.toFixed(2);

    if (media>=6){
        linhas[i].cells[5].textContent="Aprovado!";
    }else {
        linhas[i].cells[5].textContent = "Reprovado";
    }
}
}