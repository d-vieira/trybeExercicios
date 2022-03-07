// Exercicio 1:
const calcFactorial = (n) => {
  let result = 1;
  for (i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}
console.log(calcFactorial(4));
