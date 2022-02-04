let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  // for(let index = 0; index <= numbers.length; index += 1) {
  //   console.log(numbers[index]);
  // }

  // let result = 0;
  //   for (let index = 0; index < numbers.length; index += 1) {
  //     result += numbers[index];
  //   }
    
  //   console.log(result);

  // let result = 0;
  //   for (let index = 0; index < numbers.length; index += 1) {
  //     result += numbers[index];
  //   }
  //   if (result / numbers.length > 20) {
  //     console.log("valor maior que 20");
  //   }
  //   else {
  //     console.log("valor menor ou igual a 20");
  //   }

 
// let result = 0;  
// for (let indexUm = 0; indexUm < numbers.length; indexUm += 1) {
//    for (let indexDois = 0; indexDois < numbers.length; indexDois += 1) {
//      if (numbers[indexDois] > numbers[indexUm]) {
//        result = numbers[indexDois];
//      }
//    }
// }
// console.log(numbers[indexUm]);
                // let numbers = [5, 9, 3, 19, 70, 8, 100, 102, 35, 27];
                // let maiorValor = 0;
                // for (index =0 ; index < numbers.length; index +=1){
                //   if(numbers[index] > maiorValor){
                //     maiorValor = numbers[index];
                //   }
                // }
                // console.log(maiorValor);
                // // Concluí de forma MORAL com a ajuda do Breno Barbosa Trindade.

                
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [3, 8, 2, 18, 70, 8, 100, 2, 34, 26];
let result = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    result += 1;
  }
}

if (result == 0) {
  console.log("tem nada aqui")
} else {
  console.log(result);
}