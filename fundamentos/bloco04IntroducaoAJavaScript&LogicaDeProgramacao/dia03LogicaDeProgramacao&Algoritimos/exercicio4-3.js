// EXERCICIO 1
// let resultadoUm = 10;
// let resultadoDois;

// for (let indexUm = 10; indexUm >= 1; indexUm -= 1) {
//   resultadoUm = indexUm * resultadoUm;
  
// }
// console.log(resultadoUm);
// Consultar exercicio 1, consolelog gerando 1 zero a mais

// EXERCICIO 2
// let word = 'tryber';
// let resultOne = ""
// ;
// for (let indexOne = word.length -1; indexOne >= 0; indexOne -= 1) {
//   resultOne += word[indexOne];
// }
// console.log(resultOne);

// EXERCICIO 3
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ["java", "javascript", "python", "html", "css",];

// let resultOne = array[0];

// for (let index1 = 0; index1 < array.length; index1 += 1) {
//   if (array[index1].length > resultOne.length) {
//     resultOne = array[index1];
//   } 
// }
// console.log(resultOne);

let array = ["java", "javascript", "python", "html", "css",];

let resultOne = array[0];

for (let index1 = 0; index1 < array.length; index1 += 1) {
  if (array[index1].length < resultOne.length) {
    resultOne = array[index1];
  } 
}
console.log(resultOne);