// // #Exercicio 01 - desenvolvido junto com Breno Barbosa Trindade

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };
// const information = (name, lastName) => {
//   const info = {
//     nomeCompleto : `${name} ${lastName}`,
//     email: `${name}_${lastName}@trybe.com`,
//   }
//   return info;
// }
// console.log(newEmployees(information));

// // #Exercicio 02-

// const getBetResult = (betNumber, betCompare) => betCompare === betNumber ? `Parabéns você ganhou` : `Tente novamente`;

// const betCompare = () => Math.floor(Math.random() * 6) + 1;

// console.log(getBetResult(2, betCompare()));

