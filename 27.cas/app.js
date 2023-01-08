//splice()-najjaca alatka
//1.mozemo dodati koliko hocemo na nekom mestu
//2.mozemo izbrisati koliko hocemo elemenata na nekom mestu
const niz = [
  "dzenan",
  "bakir",
  "amer",
  "aladin",
  "haris",
  "merisa",
  "hatidza",
  "alen",
  "miona",
];
//splice uzima min dva elementa
//niz.splice(2, 5); //prvi argument je od kojeg se indeksa krece a drugi koliko mesta uzima
// console.log(niz);
//niz.splice(2, 0, "tarik", "rikta"); //prvi argument indeks drugi kolko brisemo a ostali sta dodajemo respektivno
//console.log(niz);

//iz niza izbrisati sve muskarce
//iz niza izbrisati sve devojke
//na petom elementu dodati tarika a na kraju dodati omar

// niz.splice(5, 2);
// console.log(niz);
// niz.splice(6, 1);
// console.log(niz);

niz.splice(6, 0, "tarik");
niz.splice(10, 0, "omar");
//console.log(niz.splice(6, 1));  vraca elemente koji su izbrisani

//slice()
const novi = niz.slice(3, 5);
console.log(novi);
//slice pravi novi niz pa mora const sa uzetim delom orginalnog niza
const novi2 = niz.slice(3); //od 3 do kraja

//sort() metoda nam sortira niz abecedno ne radi za brojeve
niz.sort();
console.log(niz);
//reverse metoda sortira niz obrnutim redosledom
niz.reverse();
console.log(niz);

const br = [23, 13, 64, 75, -23, 45 - 45];

//za brojeve se koristi callback unutar sort metode

//funkcija koja se salje kao argument unutar neke druge funkcije se zove callback funkcija
// function poredjaj(a, b) {
//   return a - b;
// }
// br.sort(poredjaj);
// console.log(br);

br.sort(function (a, b) {
  return a - b;
});
console.log(br);
//od najveceg ka najmanjem
br.sort(function (a, b) {
  return b - a;
});
console.log(br);

//ako hocemo random srotirane brojeve
br.sort(() => 0.5 - Math.random());
console.log(br);
