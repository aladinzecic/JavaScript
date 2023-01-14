//JS ARRAY ITERATION//
//array iteration metode prolaze kroz svaki element niza

//forEach() metoda poziva callback funckiju za svaki element niza
const niz = ["hamed", "emin", "bakir", "dzenan"];
// niz.forEach((element) => {
//   console.log(element);
// });
// //forEach moze imati 3 parametra:
// //1.element niza
// //2.index niza
// //3.ceo niz

// niz.forEach((element, index) => {
//   console.log(`${element} se nalazi na ${index + 1} mestu u nizu`);
// });

// niz.forEach((element, index, arr) => {
//   console.log(
//     `${element} se nalazi na ${index + 1} mestu u nizu.Ceo niz je ${arr}`
//   );
// });

// niz.forEach((student, pozicija) => {
//   //radi i sa drugim nazivima al bolje normalno da ih nazivamo
//   console.log(`${student} se nalazi na ${pozicija + 1} mestu u nizu`);
// });

// //map() metoda kreira novi niz iste duzine kao originalni sa logikom predstavljenom unutar callback funkcije unutar date metode
// const novi = [];
// for (i = 0; i < niz.length; i++) {
//   novi[i] = niz[i];
// }
// console.log(novi);

// const niz3 = niz.map(function (student) {
//   return student;
// });
// const niz3 = niz.map((student) => student);
// console.log(niz3);

const niz4 = niz.map((student) => student[0].toUpperCase() + student.slice(1));
console.log(niz4);

const brojevi = [-5, 4, 3, 10, 14, -5];

// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// const niz5 = niz.map((element) => element.toUpperCase());
// console.log(niz5);

// brojevi.forEach((element) => console.log(element * element));

// brojevi.forEach((element) => console.log(Math.sqrt(element)));

brojevi.forEach((element) => {
  if (element < 0) element *= -1;
  else element *= element;
  console.log(element);
});
