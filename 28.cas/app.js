//IndexOf() metoda vraca poziciju elementa koji predstavlja argument date metode
const niz = ["hatidza", "bakir", "amer"];
const bakir = niz.indexOf("bakir");
console.log(bakir + 1);
const omar = niz.indexOf("omar");
console.log(omar);
const hatidza = niz.indexOf("hatidza", 1);
console.log(hatidza);

//lastIndexOf() metoda vraca poslednju poziciju elementa koji predstavlja argument date metode
const niz1 = ["hatidza", "bakir", "bakir", "amer"];
const bakir1 = niz.indexOf("bakir");
console.log(bakir + 1);
const omar1 = niz.indexOf("omar");
console.log(omar);
const hatidza1 = niz.indexOf("hatidza", 1);
console.log(hatidza);
const bakir2 = niz.lastIndexOf("bakir");
console.log(bakir2);

//Array.from()metoda nam vraca niz koji se pravi odnekog objekta koji ima length
const novi = Array.from("svako slovo posebno");
console.log(novi);

//includes() vraca boolean
console.log(niz.includes("emin"));

//keys() metoda vraca Array Iteration object sa kljucevima (indeksima) nekog niza

const indeksi = niz.keys();
console.log(indeksi);
for (let index of indeksi) {
  console.log(index);
}

//entries() metoda vraca Array Iterator Object sa keyvalue parovima nekog niza
const entries = niz.entries();
console.log(entries);
for (let pair of entries) {
  console.log(pair);
}

const getElements = (niz, n) => {
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) return niz[0];
  else {
    return niz.slice(0, n);
  }
};
console.log(getElements([1, 2, 3, 5, 6, 7], 4));
