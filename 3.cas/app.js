// 1.VAR

// var x=15 
var x;//deklarisanje romenljive x (obezbedjivanje lokacijske memorije za promenljivu x)
x=15;//inicijalizacija promenljive x (dodela vrednosti vec deklarisanoj promenljivoj x)

var x=15;//isto dozvoljeno
console.log(x)


var x;//redeklarisanje promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru
x=22;//reinicijalizacija promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru

//2.LET-definisanje promenljive za koju postoji mogucnost promene vrednosti 
let y;//deklarisanje romenljive y (obezbedjivanje lokacijske memorije za promenljivu x)
y=14;//inicijalizacija promenljive y (dodela vrednosti vec deklarisanoj promenljivoj x)
//let y=14;=isto dozvoljeno
console.log(y)

let a, b, c;//korekan nacin deklarisanja promenljivih


//let y=  redeklarisanje promenljive definisane putem let keyword nije dozvoljeno ako se radi o istom prostoru

y=12;// reinicijalizacija promenljive definisane putem let eyworda je dozvoljena u bilo kom prostoru
console.log(y)

//global scope je ceo prostor
// promenljive koje su definsane putem let ili const keyword nam obezbedjuju block scope
{
    // console.log(y) prepoznaje se promenljiva iz global scope-a
    let y;//redeklaracija promenljive definisane putem let u drugom prostoru je dozvoljena
    y=24;
    console.log(y)
}
console.log(y)//global scope ne prepoznaje block skopove kad se izadje iz njih i isoisuje se poslednja vrednost iz global scopea

//3.CONST 
//NIJE DOZVOLJENA NI DEKL. NI REINIC.
const z=14;//promenljive definisane putem const moraju biti odjednom deklarisae i inicijalizovane
// const z; ovo ne moze
// z=24 ovo ne moze

// const z=23; nije moguce redeklarisanje promenljive putem const keyworda kada se radi o istom prostoru
// console.log(z)

// z=23; reinicijalizacija promenljive putem const keyworda kada se radi o istom prostoru nije moguca
console.log(z)
//sve karakteristike koje vaze za promenljive putem let u block skope-u vaze i za promenljive definisane putem const keyworda



