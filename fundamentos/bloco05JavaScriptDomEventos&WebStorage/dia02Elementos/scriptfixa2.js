document.querySelector('#elementoOndeVoceEsta');
document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = "blue";
document.querySelector('#primeiroFilhoDoFilho').innerText = "APENAS UM TEXTO";
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling;
let newChild = document.createElement('p');
newChild.innerText = "HEY THERE!!!";
newChild.color = 'red';
newChild.style.fontSize = '25px';
newChild.appendChild('#pai');

