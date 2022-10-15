document.getElementById("paragraph").innerHTML =
"ovo je paragraf koji unet naknadno.";

paragraph = document.getElementById("paragraph");

paragraph.style.backgroundColor="red";

console.log("ovo je nas prvi ispis u konzoli");

// tipovi podataka u javascriptu//
//za proveru tipa  neke varijable(promenljive) se koristi typeof operator //

//primitivni tipovi podataka //
//1.Stringovi-predstavljaju niz karaktera koji je zapisan unutgar navodnika (obicnih ili duplih) i samo se oni stavljaju untar navodnika  //

console.log("neki string unutar duplih navodnika");
console.log(typeof "neki string unutar duplih navodnika");
console.log('neki string unutar duplih navodnika');
console.log(`neki string unutar duplih navodnika`);
console.log(`neki string unutar duplih navodnika`);
console.log(typeof "neki string unutar duplih navodnika");
//2.number- predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza(tacke)
// ne pravi se razlika izmedju celih realnih i kompleksnih brojeva
console.log(234);
console.log(typeof 234);

console.log(-5.67);
console.log(typeof -5.67);

//3. BigInt -koristi se za skladistenje cija granica prelazi granicu number tipa podatka//
console.log(BigInt(27349860576485347235614138749086753));
console.log(typeof BigInt(27349860576485347235614138749086753));

// 4. boolean- logicki entitet koji moze imati dve vrednosti: //
// true,
// false.
// najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu

console.log(true);
console.log(typeof true);

daLiPadaKisa = false;
console.log(daLiPadaKisa);

// undefined-je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu ali joj nismo dodelili
// vrednost. U tom slucaju i vrednost i tip promenljive je undefined

let prom1; //deklarisanje promenljive
prom1=54;  //inicijalizacija (dodela vrednosti)promenljive


// 6.null -tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost
let skola=null;
console.log(typeof skola);//rezultat je object

//Symbol-novi tip podatka u javascriptu koji se koristi za dodeljivanje jedinstvene ili anonimne vrednosti 

x=Symbol("Danas je lepo vreme");
console.log(x);
y=Symbol("Danas je lepo vreme");
console.log(y);

console.log(x === y);

//primitivni tippovi podataka se koriste kada imamo promenljivu(varijablu sa samo jednom vrednoscu)


//NEPRIMITIVNI TIPOVI PODATAKA

//za promenljive (varijable) koje mogu skladistiti vise vrednosti ili neke kompleksne vrednosti se koriste neprimitivni tipovi podataka
//kada ispitujemi tip podatka za neku neprimitivnu promenljivu u javascriptu dobijemo Object za tip


//1.nizovi(arrays) neprimitivni tip podatka koji sluzi za skladistenje vise vrednosti
//u JSu niz moze imati elemente razlicitog tipa.

niz1 =["miatr","dzeno","home","baksa"];
console.log(niz1);

niz2=["mitar",15,false];
console.log(niz2);

//jos jedan nacin definisanja niza

niz3= new Array("dmitr",15,false);
console.log(niz3)

//2.objects- su GLAVNI neprimitivni tip podatka u JSu
//objekti se zapisuju po principu name:value pait(ime:vrednost par)

obj1={
    ime:"mehmed",
    prezime:"kucevic",
    godine:"15",
    skola:"dva heroja",
    punoletnost:false
}
console.log(obj1.godine)

obj2=new Object(
    {
        ime:"amer",
        prezime:"honic",
        godine:"19",
        skola:"dunp",
        punoletnost:true
    }
)
console.log(obj2.ime)
//3.setovi(sets)- oni su slcni nizovima sa razlikom da set ne moze da sadrzi duplikate (izostavi ako napises 2 put)

set1=new Set(["amir","amir","hasan","miona"])
console.log(set1)

//4.mape(maps)- su slicni objektima sa nesto druacijim nacinom definisanja.

map1=new Map([
    ["jabuke",50],
    ["kruske",60],
    ["jagode",90],
])
console.log(map1)