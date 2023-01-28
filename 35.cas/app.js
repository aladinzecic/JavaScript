//JSON javascript object notation

//JSON je format za skladistenje i prenos podataka
//najcesce se koristi kada se podaci salju sa servera ka WEB stranici

//json podaci su vrlo slicni js objektu i one se zapisuju:

//kets/names zahtevaju duple navonike za razliku od

const person = {
  first: "amer",
  last: "honic",
  age: 19,
};

//dve metode za pretvaranje
//1.JSON.stringify() PRETVARA NAS OBJEKT U json FORMAT PA json u string.Koristi se za slanje podataka

const object = JSON.stringify(person);
console.log(object);
console.log(typeof object);

//2. JSON.parse()
//analizira se neki string i u slucaju mogucnosti pretvara u objekat(nama citljiv podatak)
const obj = JSON.parse(object);
console.log(obj);
