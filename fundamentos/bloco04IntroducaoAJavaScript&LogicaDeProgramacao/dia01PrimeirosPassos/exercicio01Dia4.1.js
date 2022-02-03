const a = 27;
const b = 72;
let msgExUm = "Ambos os números são iguais! =]"
const c = 11;
let msgExDois = "Todos os números são iguais! =]"
let msgExTres = null;

  // console.log(a + b);
  // console.log(a - b);
  // console.log(a * b);
  // console.log(a / b);
  // console.log(a % b);

  // if (a > b && c) {
  //   console.log(a);
  // }
  // if else (b > a && c) {
  //   console.log(b);
  // }
  // if else (c > a && b) {
  //   console.log(c);
  // }
  // else {
  //   console.log(msgExDois);
  // }

  if (b > 0) {
    msgExTres = "Positive";
    console.log(msgExTres);
  }
  else if (b < 0) {
    msgExTres = "Negative";
    console.log(msgExTres);
  }
  else {
    msgExTres = "Zero";
    console.log(msgExTres);
  }