//date objects

//datumi krecu od 1.1.1970 i idu u + i -

//kreiranje datuma

//vrsi se preko new keyword

//kreiranje datuma mozmeo izvrsiti na 4 nacina

//1. new Date()

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

//2. new Date(year,month,day,hour,minutes,second,miliseconds)
const datum = new Date(2003, 8, 19, 22, 22, 22, 22);
console.log(datum); //meseci se racunaju od 0 do 11 (uvek nam racuna za jedan vise)
//ako ovako pravimo datume moramo imati min 2 argumenta a max 7
//ukoliko ubacimo samo 1 ili 2 cifre u prvi argument to se odnosi na prosli vek 19xx ili 190x
const datum4 = new Date(86, 0);
console.log(datum4);
//ako stavimo samo jedan argument on to gleda kao milisekunde

//3.slanjem jednog argumenta unutar Date()
//ovako napravljen datum ja zapravo broj milisekundi dodat na 1.1.1970 i

//4.slanjem stringa u Date() kao argument.String ce biti parse-ovan i dobicemo datum na osnovu toga

datum1 = new Date("2017 January 25");
console.log(datum1);

// Date.now() nam daje trenutno vreme u milisekundama
//Date.parse() nam daje vreme u milisekundama od nekog datuma
// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

function funkcija(par1, par2) {
  return (Date.parse(par1) - Date.parse(par2)) / 86400000;
}
console.log(funkcija("2004 sep 15", "99 may 24"));
