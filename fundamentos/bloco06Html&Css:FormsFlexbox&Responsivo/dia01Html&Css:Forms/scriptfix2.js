const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
HREF_LINK.addEventListener('click', stopAnchorFunction);
INPUT_CHECKBOX.addEventListener('click', stopCheckBoxFunction);
INPUT_TEXT.addEventListener('keypress', stopInputTextFunction);

function stopAnchorFunction(event) {
  event.preventDefault();
}

function stopCheckBoxFunction(event) {
  event.preventDefault();
}

function stopInputTextFunction(event) {
  if (event.key !== 'a') {
  event.preventDefault();
  }
}