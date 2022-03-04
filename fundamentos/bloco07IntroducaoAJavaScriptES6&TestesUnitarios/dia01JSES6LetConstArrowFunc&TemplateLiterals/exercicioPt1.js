// // Exercício 1:
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if).`;
//     ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }
// testingScope(false);

// Exercício 2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b){return a-b}) // funcao declarada como anonima baseada em documentação: https://www.w3schools.com/jsref/jsref_sort.asp
oddsAndEvens.sort((a, b) => a-b); // funcao declarada como 'arrow' baseada em documentação: https://www.w3schools.com/jsref/jsref_sort.asp
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
