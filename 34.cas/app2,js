//OBJEKTI
//objekti su glavna stvaru u jsu
//objekti su promneljive koje sadrze vise vrednosti
//predstvaljaju se u key:value parovima
//jedan key:value par se zove property (svojstvo)
const person = {
  firstName: "bandzo",
  lastName: "bozovic",
  age: 18,
  adult: true,
};
console.log(person.firstName);
//pristupanje odredjenim vrednostima objekta mozemo izvrsitit na 2 nacina

//objectname.propertyname   (person.firstname)
//objectname["property"]   (person["firstname"])

const punoletan = person.adult === true ? "jeste" : "nije";
console.log(`${person["firstName"]} ${punoletan} punoletan`);

//Object Methods//
//objekti takodje mogu imati metode
//metode su funkcije koje ce se izvrsiti na objektu
//metode su skladistene u svojstvima kao definicije funkcija

const person2 = {
  firstName: "alen",
  lastName: "muslic",
  age: 17,
  adult: false,
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.fullname()); //moraju zagrade jer je funkcija

//u jsu this je keyword (rezervisana rec) koja ukazuje na neki objekat
//this nije promenljiva i ne mozemo promeniti vredonst thisa
//this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi
// *u nekom objektu this ukazuje na taj objekat
//*u global scopeu this ukazuje na global object
