// 01-
function checkPalindrome(input) {
  let resultOne = [];
  let resultTwo = [];
  let message = "";
  for (let index in input) {
    resultOne.push(input[index]);
  }
  resultOne.reverse();
  resultTwo = resultOne.join("");

  if(input === resultTwo) {
    message = "true";
  } else {
    message = "false";
  }
  return message;
} 
console.log(checkPalindrome("Daniel"));

