// calculando quantos anos levara para Joao ficar mais alto que Pedro usando o while

let alturaP = 145;
let alturaJ = 134;
let anos = 0;


while (alturaJ <= alturaP ){
    alturaJ = alturaJ + 2.5;
    alturaP = alturaP + 2;
    anos++;

}

console.log ("João só ficara mais alto que Pedro em  " +anos+ " anos." );


