let mySubmitButton = document.querySelector('#submit-button');
// mySubmitButton.addEventListener('click', stopSubmitButton);
mySubmitButton.addEventListener('click', validateFormInputs)

function validateFormInputs(event) {
  let myFormNameInput = document.forms['trybe-trip']['full-name'].value;
  let myFormEmailInput = document.forms['trybe-trip']['e-mail-address'].value;
  if (myFormNameInput.length < 10 || myFormEmailInput.length < 10) {
    window.alert('Dados Inválidos');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

// function stopSubmitButton(event) {
//   event.preventDefault();
// }