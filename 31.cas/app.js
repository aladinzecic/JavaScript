// // // //filter() metoda kreira novi niz sa onim elementima koji su prosli test
// // // //novodobijeni niz ima maksimalno elemenata kao onaj na kome se primenjuje metoda a moze biti i prazan ako niko ne prodje test

// // const broj = [19, 23, 12, 15, 18, 22];
// // // const punoletni = broj.filter(function (element) {
// // //   return element > 17;
// // // });
// // // console.log(punoletni);

// // // const niz = [
// // //   "kjdsjshfhjsfjh",
// // //   "bakir",
// // //   "haris",
// // //   "amer",
// // //   "dzenan",
// // //   "hasan",
// // //   "aladin",
// // //   "nikola",
// // //   "merisa",
// // //   true,
// // //   false,
// // // ];
// // // const novi = niz.filter(function (element) {
// // //   return element[1] === "e";
// // // });
// // // console.log(novi);

// // // const novi1 = niz.filter(function (element) {
// // //   return element.length <= 4;
// // // });
// // // console.log(novi1);

// // // const novi2 = niz.filter(function (element) {
// // //   return typeof element === "boolean";
// // // });
// // // console.log(novi2);

// // function sec(arr) {
// //   const novia = arr.filter((el) => el > 2);
// //   const novib = novia.map((el) => {
// //     if (el < 8) return el * 2;
// //     else return el * 7;
// //   });
// //   const novic = novib.filter((el) => el < 10);
// //   return novic;
// // }

// // console.log(sec([-1, 8, 10, 2, 4, 6, 12]));

// // //reduce() metoda vraca jednu vrednost.iteracija se vrsi kroz ceo niz

// // const zbir = broj.reduce((prosla, sadasnja) => prosla + sadasnja);
// // console.log(zbir);

// // //mozemo i da imamo pocetnu vrednost ako hocemo

// // const iznos = broj.reduce((prosla, sadasnja) => prosla + sadasnja, 350);
// // console.log(iznos);

// // const prosek = broj.reduce((prosla, sadasnja) => prosla + sadasnja);
// // console.log(Math.floor(prosek / broj.length));

// // function funkcija(niz) {
// //   const kilo = niz.map((el) => el * 1.61);
// //   const ukupno = kilo.reduce((pre, sad) => pre + sad);
// //   return ukupno;
// // }
// // console.log(funkcija(broj));

// // function funkcija(niz) {
// //   for (let i = 0; i < niz.length - 1; i++)
// //     for (let j = i+1; j < niz.length; j++) {
// //       if (niz[i] == niz[j]) suma++;
// //     }
// // // }
// // console.log(funkcija(broj));

// // const broj1 = [1, 2, 3, 4];
// // const broj2 = [1, 2, 3];
// // function funkcija1(niz1, niz2) {
// //   const novi = [];
// //   if (niz1.length > niz2.length)
// //     if(niz2==undefined)novi.push(niz1[i])
// //     for (i = 0; i < niz1.length; i++) novi[i] = niz1[i] + niz2[i];
// //   else if (niz2.length > niz2.length)
// //     for (i = 0; i < niz1.length; i++) novi[i] = niz1[i] + niz2[i];
// //   return novi;
// // }
// // console.log(funkcija1(broj1, broj2));
// // 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// const nizzzz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const novinizzz = nizzzz
//   .filter((element) => element % 2 === 0)
//   .reduce((prev, curr) => prev + curr);
// console.log(novinizzz);
// // 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// const novinizzz2 = nizzzz
//   .filter((el) => el % 2 === 0)
//   .map((el) => el ** 2)
//   .reduce((prev, curr) => prev + curr);
// console.log(novinizzz2);

// // 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// function zameni(recenica) {
//   let novarecenica = "";
//   for (let i = 0; i < recenica.length; i++) {
//     recenica[i] === recenica[i].toUpperCase()
//       ? (novarecenica += recenica[i].toLowerCase())
//       : (novarecenica += recenica[i].toUpperCase());
//   }
//   return novarecenica;
// }
// console.log(zameni("The Quick Brown Fox"));
let i = 2;

let niz = [1, 1];
while (niz[i - 1] + niz[i - 2] < 4000000) {
  niz.push(niz[i - 1] + niz[i - 2]);
  i++;
}
const suma = niz
  .filter((br) => br % 2 === 0)
  .reduce((prev, curr) => prev + curr);

console.log(suma);
function pali(broj) {
  const broj1 = broj.toString();
  novi = "";
  for (i = broj1; i >= 0; i--) {
    novi += broj1[i];
  }
  if (novi === broj1) return true;
  else return false;
}
const maxpali = () => {
  const niz1 = [];
  for (i = 999; i >= 0; i--)
    for (k = i; k >= 0; k--) {
      if (pali(i * k) && !niz1.includes(i * k)) niz.push(i * k);
    }
  return Math.max.apply(null, niz1);
};
console.log(maxpali());
