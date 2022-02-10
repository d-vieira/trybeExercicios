//1
function changeText() {
  let paragraphChange = document.getElementsByTagName('p');
  paragraphChange[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac faucibus sapien, elementum viverra erat.";
}
changeText();

//2
function changeMainColor() {
  let colorChange = document.getElementsByClassName('main-content');
  colorChange[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeMainColor();

//3
function changeCenterColor() {
  let othername = document.getElementsByClassName('center-content');
  othername[0].style.backgroundColor = 'rgb(255,255,255)';
}
changeCenterColor();

//4
function changeTitle() {
  let newTitle = document.getElementsByTagName('h1');
  newTitle[0].innerText = 'Exercício 5.1 - JavaScript '
}
changeTitle();

//5
function changeToUpperCase() {
  let changeCase = document.getElementsByTagName('p');
  for (let key in changeCase) {
    changeCase[key].style.textTransform = 'uppercase';
  }
}
changeToUpperCase();

//6
function logToTheConsole () {
  let paragraphs = document.getElementsByTagName('p');
  for (let key in paragraphs) {
    console.log(paragraphs[key]);
  }
}
logToTheConsole();