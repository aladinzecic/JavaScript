//Object built in Methods//

const person = {
  firstname: "hamed",
  lastname: "medjedovic",
  age: 16,
};

//Object.freeze(obj) metoda cini objekat nepromenljivim
// person.age = 17;
// console.log(person);
// // Object.freeze(person);
// person.age = 18;
// console.log(person);

//Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnost dodavanja (brisanja)
//novih metoda i svojstava

// Object.seal(person);
// person.age = 22;
// console.log(person);
// delete person.age;
// console.log(person);

//Object.keys(obj) vraca niz kljuceva
console.log(Object.keys(person));

//Object.entries(obj) vraca niz nizova
//svaki podniz je niz od 2 elementa
console.log(Object.entries(person));

const entries = Object.entries(person);
console.log(entries);
const niz = entries.flat().filter(function (element) {
  return typeof element === typeof "string";
});
console.log(niz);

//Object.is(obj1,obj2)
//gledamo je li jedan referentan na drugi a ne vrednosti
//ako su referentni vraca true
const obj1 = {
  ime: "mitar",
  prezime: "vranic",
};

const obj2 = {
  ime: "mitar",
  prezime: "vranic",
};

console.log(Object.is(obj1, obj2));
const obj3 = obj1;
console.log(Object.is(obj1, obj3));

const ime = "Bakir";
const prezime = "Ujkanovic";
const godine = 19;

const person2 = {
  //ovde su ime promenljivih postali kljucevi a vrednosti value
  ime,
  prezime,
  godine,
};
console.log(person2);

//Destructuring
const person3 = {
  ime1: "hasan",
  prezime1: "mujanovic",
  age: 18,
};

// const firstname=person3.ime1 ovo je peske

const { ime1, age } = person3;
console.log(ime1);
console.log(age);

const godina = [{ starost: 19 }, { starost: 17 }, { starost: 20 }];
const novi = godina.filter(function (element) {
  return element.starost > 17;
});
console.log(novi);

// Domaci:
//  1. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
  {
    title: "Aockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function sort() {
  max = library[0].title.length;
  for (i = 1; i < library.length; i++) {
    if (library[i].title.length > max) max = library[i].title.length;
  }
  for (i = 0; i < library.length - 1; i++) {
    for (j = i + 1; j < library.length; j++) {
      for (k = 0; k < max; k++) {
        if (library[i].title[k] > library[j].title[k + 1]) {
          pom = library[i];
          library[i] = library[j];
          library[j] = pom;
        }
      }
    }
  }
  console.log(library);
}
console.log(sort());
