// // //filter() metoda kreira novi niz sa onim elementima koji su prosli test
// // //novodobijeni niz ima maksimalno elemenata kao onaj na kome se primenjuje metoda a moze biti i prazan ako niko ne prodje test

// const broj = [19, 23, 12, 15, 18, 22];
// // const punoletni = broj.filter(function (element) {
// //   return element > 17;
// // });
// // console.log(punoletni);

// // const niz = [
// //   "kjdsjshfhjsfjh",
// //   "bakir",
// //   "haris",
// //   "amer",
// //   "dzenan",
// //   "hasan",
// //   "aladin",
// //   "nikola",
// //   "merisa",
// //   true,
// //   false,
// // ];
// // const novi = niz.filter(function (element) {
// //   return element[1] === "e";
// // });
// // console.log(novi);

// // const novi1 = niz.filter(function (element) {
// //   return element.length <= 4;
// // });
// // console.log(novi1);

// // const novi2 = niz.filter(function (element) {
// //   return typeof element === "boolean";
// // });
// // console.log(novi2);

// function sec(arr) {
//   const novia = arr.filter((el) => el > 2);
//   const novib = novia.map((el) => {
//     if (el < 8) return el * 2;
//     else return el * 7;
//   });
//   const novic = novib.filter((el) => el < 10);
//   return novic;
// }

// console.log(sec([-1, 8, 10, 2, 4, 6, 12]));

// //reduce() metoda vraca jednu vrednost.iteracija se vrsi kroz ceo niz

// const zbir = broj.reduce((prosla, sadasnja) => prosla + sadasnja);
// console.log(zbir);

// //mozemo i da imamo pocetnu vrednost ako hocemo

// const iznos = broj.reduce((prosla, sadasnja) => prosla + sadasnja, 350);
// console.log(iznos);

// const prosek = broj.reduce((prosla, sadasnja) => prosla + sadasnja);
// console.log(Math.floor(prosek / broj.length));

// function funkcija(niz) {
//   const kilo = niz.map((el) => el * 1.61);
//   const ukupno = kilo.reduce((pre, sad) => pre + sad);
//   return ukupno;
// }
// console.log(funkcija(broj));

// function funkcija(niz) {
//   for (let i = 0; i < niz.length - 1; i++)
//     for (let j = 1; j < niz.length; j++) {
//       if (niz[i] == niz[j]) suma++;
//     }
// // }
// console.log(funkcija(broj));
const broj1 = [1, 2, 3, 4];
const broj2 = [1, 2, 3];
function funkcija1(niz1, niz2) {
  const novi = [];
  if (niz1.length > niz2.length)
    if(niz2==undefined)novi.push(niz1[i])
    for (i = 0; i < niz1.length; i++) novi[i] = niz1[i] + niz2[i];
  else if (niz2.length > niz2.length)
    for (i = 0; i < niz1.length; i++) novi[i] = niz1[i] + niz2[i];
  return novi;
}
console.log(funkcija1(broj1, broj2));
