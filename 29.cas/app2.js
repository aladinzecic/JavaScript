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
