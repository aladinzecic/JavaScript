// //every() metoda proverava da li su svi elementi zadovoljili uslov
// //every() metoda vraca boolean

// //da li su svi u grupi punoletni
// const godine = [16, 19, 18, 19, 15, 17, 21, 20, 17];
// const isadult = godine.every((godina) => godina > 17);
// console.log(isadult);

// const ime = ["ja", "miona", "bakir", "haris"];
// const vise5 = ime.every((ime) => ime.length > 4);
// console.log(vise5);

// //some() vraca true ako bar jedan zadovolji
// const jeli9 = ime.some((ime) => ime.length === 9);
// console.log(jeli9);
// const jeli2 = ime.some((ime) => ime.length === 2);
// console.log(jeli2);

// function jeli(niz) {
//   for (i = 0; i < niz.length; i++) {
//     if (niz[i].length === 2) {
//       return true;
//     } else continue;
//   }
//   return false;
// }
// console.log(jeli(ime));

// //find() metoda vraca vrednost prvog elementa koji je prosao test
// const brojevi = [1, 4, 7, 25, 5, 3, 8, 4];
// //koji je prvi element niza veci od 18
// const veci = brojevi.find((el) => el >= 18);
// console.log(veci);
// //ako nijedan nije prosao test dboijamo undefined

// //findIndex() metoda vraca index prvog koji je zadovoljio uslov. ako niko ne zadovolji vraca -1
// const veci1 = brojevi.findIndex((el) => el >= 18);
// console.log(veci1);

// //novi niz bez duplikata
// function duplikat(niz) {
//   let novi = [];
//   for (let el of niz) {
//     if (
//       (typeof el === "string" &&
//         novi.some((element) => element.toLowerCase() === el.toLowerCase())) ||
//       novi.some((element) => element === el)
//     )
//       continue;
//     else novi.push(el);
//   }

//   return novi;
// }
// console.log(duplikat(["ja", "ja", "ti"]));

// function boja() {
//   const noviniz = niz1.map((element, index) => {
//     if (index == 0) {
//       return "1 " + o[0] + " choice is" + element;
//     } else if (index == 1) {
//       return "2 " + o[0] + " choice is" + element;
//     } else if (index == 2) {
//       return "3 " + o[0] + " choice is" + element;
//     } else return `${index + 1}` + o[3] + " choice is " + element;
//   });
//   return noviniz;
// }

// console.log(boja());

// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se
//jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz
//poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

// function jagoda(string) {
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

function funkcija(niz) {
  let novi = "";
  for (i = 0; i < niz.length; i++) {
    novi += `row ${i} \n`;
    for (let j of niz[i]) {
      novi += `${j}\n`;
    }
  }
  return novi;
}
console.log(funkcija([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]));
