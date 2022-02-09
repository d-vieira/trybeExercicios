// Exc 4.1 Refatorado em function:

// 01-
// function sum(n1, n2) {
//   return n1 + n2;
// }
// console.log(sum(20,10));

// function subt(n1, n2) {
//   return n1 - n2;
// }
// console.log(subt(60,40));

// function multip(n1, n2) {
//   return n1 * n2;
// }
// console.log(multip(3,7));

// function divis(n1, n2) {
//   return n1 / n2;
// }
// console.log(divis(80, 4));

// function remn(n1, n2) {
//   return n1 % n2;
// }
// console.log(remn(10, 5));

// 02-
// function higherN(n1, n2) {
//   if(n1 > n2) {
//     return n1;
//   } else if(n1 < n2) {
//     return n2;
//   } else {
//     return "Both numbers are equals.";
//   }
// }
// console.log(higherN(2,2));

//03-
// function higherN(n1, n2, n3) {
//   if(n1 > n2 && n1 > n3) {
//     return n1;
//   } else if (n2 > n1 && n2 > n3) {
//     return n2;
//   } else if (n3 > n1 && n3 > n2) {
//     return n3;
//   } else {
//     return "All numbers are equals.";
//   }
// }
// console.log(higherN(1,1,1));

//04-
// function numberT(n1) {
//   if (n1 > 0) {
//     return n1 + " Is positive";
//   } else if (n1 < 0) {
//     return n1 + " Is negative";
//   } else {
//     return "Is zero";
//   }
// }
// console.log(numberT(0));

//05-
function triang(n1, n2, n3) {
  if(n1 < 0 || n2 < 0 || n3 < 0) {
    return "ERROR!!! Triangle cant have any negative inside angles!";
  }

  if(n1 + n2 + n3 == 180) {
    return "YES WE HAVE A TRIANGLE!!!1!";
  } else {
    return "It's not a triangle =T";
  }
}
console.log(triang(-45, 45, 90));