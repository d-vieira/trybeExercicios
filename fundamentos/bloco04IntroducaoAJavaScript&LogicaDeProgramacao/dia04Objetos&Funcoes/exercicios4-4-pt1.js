// 01-
// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// console.log("Bem vinda, " + info.personagem );

// 02-
// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// info["recorrente"] = "Sim";
// console.log(info);

// 03-
// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// info["recorrente"] = "Sim";

// for (let key in info) {
//   console.log(key);
// }

// 04-
// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// info["recorrente"] = "Sim";

// for (let key in info) {
//   console.log(info[key]);
// }

// 05-
let infoDois = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
for (let key in info, infoDois) {
  console.log(info[key] + " e " + infoDois[key]);
};


