// verificacao de salario com o if else

let salarioMinimo = 1518.00; 
let salarioPessoa = 1800.50; 

console.log('Salário Mínimo: R$ ' + salarioMinimo);
console.log('Salário da Pessoa: R$ ' + salarioPessoa);
console.log();

let diferenca;

if (salarioPessoa > salarioMinimo) {
    diferenca = salarioPessoa - salarioMinimo;
    console.log('A pessoa recebe R$ ' + (salarioPessoa - salarioMinimo) + ' a MAIS que o salário mínimo.');
} else if (salarioPessoa < salarioMinimo) {
    diferenca = salarioMinimo - salarioPessoa;
    console.log('A pessoa recebe R$ ' + (salarioMinimo - salarioPessoa) + ' a MAIS que o salário mínimo.');
} else {
    console.log("A pessoa recebe exatamente o valor do salário mínimo.");
}
