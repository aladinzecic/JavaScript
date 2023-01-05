//unshift() metoda na pocetku niza dodaje jedan ili vise elemenata
const niz = ["cet", "pet", "sub"];
niz.unshift("sreda", "4");
console.log(niz);
console.log(niz.unshift("pon", "uto")); //daje duzinu niza
//shift() metoda na pocetku niza brise jedan element i smanjuje svima index za 1
const niz1 = ["cet", "pet", "sub"];
niz1.shift("cet");
console.log(niz1);
console.log(niz1.shift()); //vraca ono sto smo izbrisali

//delete keyword za brisanje nekog elementa unutar niza:
delete niz[1];
console.log(niz); //ne valja nikako

//concat()metoda se koristi za spajanje nizova.kao argument mozemo uzeti i string ne mora niz
//concat() metoda pravi novi niz
const muskarci = ["dmitr", "tarik", "dzeno"];
const devojke = ["miona", "mersija", "hatidza"];
const grupa = muskarci.concat(devojke, "mesa", "omar");
console.log(grupa);

//iz naseg niza grupa napravi 2 niza muskarci i devojke,s tim sto omar ne sme naci nigde
// const novi1 = [];
// const novi2 = [];
// function funkcija(niz) {
//   for (let osoba of niz) { ova petlja uzima elemente iz petlje
//     if (osoba === "omar") continue;
//     else if (osoba[osoba.length - 1] === "a") novi1.push(osoba);
//     else novi2.push(osoba);
//   }
//   return `muskarci su ${novi2} a zene${novi1}`;
// }
// console.log(funkcija(grupa));

function funkcija(niz) {
  let novi = [];
  for (i = 0; i < niz.length; i++) {
    if (i % 2 === 1) continue;
    else novi.push(niz[i]);
  }
  return novi;
}
console.log(funkcija(grupa));

function funkcija(niz) {
  let novi = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) novi.push(niz[i]);
  }
  return novi;
}
console.log(funkcija(["0", "2", "3"]));
