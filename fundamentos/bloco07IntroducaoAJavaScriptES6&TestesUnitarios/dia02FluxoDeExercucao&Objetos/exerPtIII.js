const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// function addTurnOnLesson2 (object, key, value) {
//   const newKey = key;
//   const newValue = value;
//   object[newKey] = newValue;
//   // return object;
// }
// console.log(addTurnOnLesson2(lesson2, 'Turno', 'Noite'));
// addTurnOnLesson2(lesson2, 'Turno', 'Noite');
// console.log(lesson2);
// const createTurn = (object, key, value) => object[key] = value; // Função criada pelo Breno.

// function listOfKeys (object) {
//   const list = Object.keys(object);
//   return list;
// }
// console.log(listOfKeys(lesson3));
// const listKey = (object) => Object.keys(object); // Função criada pelo Breno.

// function calcObjectLength (object) {
//   const count = Object.keys(object);
//   return count.length;
// }
// console.log(calcObjectLength(lesson1));
// const lenghtObject = (object) => Object.keys(object).length;
// console.log(lenghtObject(lesson1));

// REQUISITO 4 = 2

// const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
// console.table(allLessons);

// function getValueOfKey (object, key) {  // desenvolvido pelo Osmar
//   const array = Object.values(object)
//   return array[key];
// }
// console.log(getValueOfKey(lesson1, 1));
// const getValueByNumber = (obj, index) => Object.values(obj)[index]; // desenvolvido pelo Breno e Osmar
// console.log(getValueByNumber(lesson1, 0));

function verifyPair(obj, key, value){ // desenvolvido pelo Breno
  const array = Object.entries(obj);
  for(let index in array){
    if(array[index][0] == key && array[index][1] == value) {
      return true ;
    } else {
      return false;
    }
  }
}
console.log(verifyPair(lesson2,'materia','História'));