// Exercicio 1:
const calcFactorial = (n) => {
  let result;
  for (i = n; i >= 1; i -= 1) {
    result = n * i;
  }
  return result;
}
console.log(calcFactorial(4));
