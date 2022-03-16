// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

// Dica: use array destructuring .

const myList = [5, 6, 7];

// escreva swap abaixo
// const swap = ([pos1, pos2, pos3]) => [pos3, pos2, pos1]; // Ideia inicial
const swap = ([...param]) => param.reverse(); // função refatorada
console.log(swap(myList));