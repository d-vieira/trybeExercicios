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
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
info["recorrente"] = "Sim";

for (let key in info) {
  console.log(info[key]);
}