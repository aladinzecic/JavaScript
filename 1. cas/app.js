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
console.log(234)
console.log(typeof 234)

console.log(-5.67)
console.log(typeof -5.67)

//3. BigInt -koristi se za skladistenje cija granica prelazi granicu number tipa podatka//
console.log(BigInt(27349860576485347235614138749086753))
console.log(typeof BigInt(27349860576485347235614138749086753))

// 4. boolean- logicki entitet koji moze imati dve vrednosti: //
// true,
// false.
// najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu

console.log(true)
console.log(typeof true)

daLiPadaKisa = false
console.log(daLiPadaKisa)

// undefined-je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu ali joj nismo dodelili
// vrednost. U tom slucaju i vrednost i tip promenljive je undefined

let prom1; //deklarisanje promenljive
prom1=54;  //inicijalizacija (dodela vrednosti)promenljive


// 6.null -tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost
console.log(typeof skola)
