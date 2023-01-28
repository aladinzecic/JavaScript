//JS objekti su mutable (promenljivi)//

const dzenan = {
  ime: "dzenan",
  prezime: "mecinovic",
  godine: 19,
};

const dzenan2 = dzenan;
console.log(dzenan2);
dzenan2.prezime = "kosuta";
dzenan2.godine = 25;
console.log(dzenan2);
console.log(dzenan);

//brisanje svojstava iz objekata

const mitar = {
  ime: "mitar",
  prezime: "vranic",
  godine: 19,
};
delete mitar.godine;
console.log(mitar); //delete keyword se koristi za brianje elementa
//delete obj.property brise i key i value
//delete mitar["godine"]-drugi nacin

//napomena
//vrednosti nekog objekta mogu biti:
//1.objekti
//2.nizovi
//3.funkcije...

//konvertovanje objekta u niz
//Object.values(object)
const niz = Object.values(mitar);
console.log(niz);

//dodavanje novih svojstava
mitar.punoletnost = 17;
console.log(mitar);

// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  max: 260,
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutna = 0;
myCar.maksimalna = 260;
myCar.povecanje = function (ubrzanje) {
  if (this.trenutna + ubrzanje > this.maksimalna) return `ne moze`;
  else {
    this.trenutna += ubrzanje;
  }
};
myCar.povecanje(250);
console.log(myCar);

myCar.smanjenje = function (smanjenjebr) {
  if (this.trenutna - smanjenjebr < 0) return `ne moze`;
  else {
    this.trenutna -= smanjenjebr;
  }
};
myCar.smanjenje(340);
console.log(myCar);

myCar.koci = function () {
  this.trenutna = 0;
};
myCar.koci();

console.log(myCar);
