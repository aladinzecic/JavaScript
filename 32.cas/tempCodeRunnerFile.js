function jagoda(string) {
//   let flag = 0;
//   let indeks;
//   let niz = string.split(",");
//   for (let el of niz) {
//     if (el === "jagoda") flag = 1;
//   }
//   if (flag == 0) {
//     niz.sort();
//     niz.unshift(10);
//     niz.push(100);
//     return niz;
//   } else {
//     return niz.indexOf("jagoda");
//   }
// }
// console.log(jagoda("pre,jagod,tri"));

// //flat() metoda se koristi kada unutar niza imamo element
// //koji je niz i zelimo da sve podelemente izvucemo i da oni predstavljaju elemente glavnog niza

// const niz = [
//   ["jabuka", "ananas", "kruska", "sliva"],
//   ["krompir", "luk", "paradajz"],
//   ["pite", "razna jela"],
// ];
// const niz2 = niz.flat();
// console.log(niz2);