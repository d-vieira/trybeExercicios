// 04 -
const messageDelay = () => Math.floor(Math.random() * 5000);

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);


const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => { // Funcao do exercicio 04
// return `A temperatura em Marte nesse momento é: ${getMarsTemperature()}°C`
// }
// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


// 05 + 06
const sendMarsTemperature = (...functions) => {
  return functions;
}
sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature()), greet(getMarsTemperature()), handleError('Hackearam o Caíque!!1!11!!!!'));


