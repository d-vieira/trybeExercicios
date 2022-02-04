let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  // for(let index = 0; index <= numbers.length; index += 1) {
  //   console.log(numbers[index]);
  // }

  // let result = 0;
  //   for (let index = 0; index < numbers.length; index += 1) {
  //     result += numbers[index];
  //   }
    
  //   console.log(result);

  let result = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      result += numbers[index];
    }
    if (result / numbers.length > 20) {
      console.log("valor maior que 20");
    }
    else {
      console.log("valor menor ou igual a 20");
    }