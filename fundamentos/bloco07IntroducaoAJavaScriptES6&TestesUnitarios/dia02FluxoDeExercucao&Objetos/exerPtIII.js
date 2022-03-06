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

// // - Requisito 01
// function addKeyValuePair (object, key, value) {
//   const newKey = key;
//   const newValue = value;
//   object[newKey] = newValue;
//   return object;
// }
// console.log(addKeyValuePair(lesson2, 'Turno', 'Noite'));

// // Opção para chamada da função sem 'return';
// addKeyValuePair(lesson2, 'Turno', 'Noite');
// console.log(lesson2);

// // - Requisito 01 - Função criada pelo Breno.
//const createTurn = (object, key, value) => object[key] = value;

// // - Requisito 02
// function listOfKeys (object) {
//   return Object.keys(object);
// }
// console.log(listOfKeys(lesson3));

// // - Requisito 02 - Função criada pelo Breno.
// const listKey = (object) => Object.keys(object);
// console.log(listOfKeys(lesson3));

// // - Requisito 03
// function calcObjectLength (object) {
//   const count = Object.keys(object);
//   return count.length;
// }
// console.log(calcObjectLength(lesson1));

// // - Requisito 03
// const getObjectLength = (object) => Object.keys(object).length;
// console.log(getObjectLength(lesson1));

// // - Requisito 04
// function getListOfValues (object) {
//   return Object.values(object);
// }
// console.log(getListOfValues(lesson1));

// // - Requisito 04
// const listOfValues = (object) => Object.values(object);
// console.log(listOfValues(lesson1));

// // - Requisito 05
// const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
// console.table(allLessons);

// // - Requisito 06 - Aprendi a desenvolver essa função através do gabarito dos exercícios
// function getAmountOfStudents (object) {
//   let result = 0;
//   const array = Object.keys(object);
//   for (i = 0; i < array.length; i += 1) {
//     result += object[array[i]].numeroEstudantes;
//   }
//   return result;
// }
// console.log(getAmountOfStudents(allLessons));

// // - Requisito 07 - Função desenvolvida pelo Osmar
// function getValueOfKey (object, key) {
//   const array = Object.values(object);
//   return array[key];
// }
// console.log(getValueOfKey(lesson1, 1));

// // - Requisito 07 - Função desenvolvida pelo Breno e Osmar
// const getValueByNumber = (obj, index) => Object.values(obj)[index];
// console.log(getValueByNumber(lesson1, 0));

// // - Requisito 08 - Função desenvolvida pelo Breno
// function verifyPair(obj, key, value){
//   const array = Object.entries(obj);
//   for(let index in array){
//     if(array[index][0] == key && array[index][1] == value) {
//       return true ;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(verifyPair(lesson2,'materia','História'));

// // - Requisito Bonus 01
// function getAmountOfStudentsPerSubject (object, valueParam) {
//   const valuesArray = Object.values(object);
//   const keysArray = Object.keys(object);
//   const entriesArray = Object.entries(object);
//   let result = 0;
//   for (let index in entriesArray) {
//     for (let index2 in valuesArray) {

//       if (valuesArray[index2] === valueParam) {
//         result += object[entriesArray[index]].numeroEstudantes;
//       }
//     }
//   }  
//   // for (let i = 0; i < keysArray.length; i += 1) {
    
//   // }
//   // for (let i2 = 0; i2 < valuesArray.length; i2 += 1) {
//   //   if (valuesArray[i2] === valueParam) {
//   //     result += object[keysArray[i]].numeroEstudantes;
//   //   }
//   // }
  

//     // if (array[key] === valueParam) {
//     // result += object[array[key]].numeroEstudantes;
//     // }
//   return result;
// }
// console.log(getAmountOfStudentsPerSubject(allLessons, 'Matemática'));

// function countStudent (obj, value){
//   const array = Object.keys(obj);
//   let sumStudent = 0;
//     for (let key in array){
//       if(array[key].materia === value){
//         sumStudent += obj[array[key]].numeroEstudante;
//       }
//    }
//   return sumStudent;   
// }
// console.log(countStudent(allLessons, 'História'));

// // -  - Requisito Bonus 01 - Desenvolvido pelo Osmar.
// function countStudents(obj, value){
//   const array = Object.keys(obj);
//   let sumStudent =0;
//   for (let i = 0; i < array.length; i += 1){
//    if (obj[array[i]].materia === value){
//     sumStudent += obj[array[i]].numeroEstudantes;
//    }
//   }
//   return sumStudent;
//  }
 
//  console.log(countStudents(allLessons, 'História'));
