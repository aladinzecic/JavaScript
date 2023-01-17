// //napravi funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati a negativni pomnoziti sa minus 1
// //a ako se neki element pojavljuje vise puta u nizu svaki sledeci put pojavljuje se "ovde je bio duplikat"
// const brojevi = [-5, 4, 3, 10, 14, -5];
// // const brojevi1 = [-5, 4, 3, 10, 14, -5];
// const second = (arr) => {
//   const novi = [];
//   for (i = 0; i < brojevi.length - 1; i++)
//     for (j = i + 1; j < brojevi.length; j++) {
//       if (brojevi[i] == brojevi[j]) brojevi[j] = 0;
//     }
//   for (i = 0; i < brojevi.length; i++) {
//     if (brojevi[i] != 0) novi.push(brojevi[i]);
//     else novi.push("duplikat");
//   }
//   return novi;
// };
// console.log(second(brojevi));

// const third = (arr) => {
//   const novi1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.slice(0, i).includes(arr[i])) novi1.push("dupljak");
//   }
// };
// console.log(second(brojevi));

// const brojevi2 = brojevi1.map((element, i) => {
//   if (i == 0 || i == 3 || i == 5) return element ** 2;
//   else return element;
// // });
// console.log(brojevi2);
const brojevi5 = [-5, 4, 3, 19, 14, -5];
const brojevi3 = brojevi5.map((element, i, arr) => {
  let as = 0;
  if (element % 2 == 0) return element ** 2;
  else return (arr[i] + arr[i - 1] + arr[i + 1]) / 3;
});
console.log(brojevi3);

// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
const novi = [];
for (let broj of brojevi5) {
  if (broj > 17) novi.push(broj);
}
console.log(novi);

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];
let novi2 = [];
const novi3 = [];
function funkcija(niz1, niz2) {
  novi2 = niz1.concat(niz2);
  for (let broj of DATA1) {
    if (broj % 2 == 0) novi3.push(broj);
  }
  for (i = 0; i < niz1.length; i++) {
    novi3[i + 2] = niz1[i];
  }
  novi3[0] = 10;
  novi3[1] = 20;
  console.log(novi2);
  console.log(novi3);
}

console.log(funkcija(DATA1, DATA2));
