//search() metoda nam daje poziciju -index nekog stringa (argumenta meotode)
const recenica ="desila se neocekivana poseta"
const position=recenica.search("poseta")

//razlike izmedju indexOf() i search() je da :
//1.indexOf dozvoljava drugi argument koji predstavlja odakle pocinje trazenje 
//2.search() dozvoljava Regular Expressions uvek ukljucen b(global)
const recenica2="Danas su pocela polufinala  respekt 123  danas"
const position2=recenica2.search(/danas/i)
console.log(position2)

//match() metoda nam vraca niz

const matchingDanas=recenica2.match("danas")
const matchingDanas1=recenica2.match(/danas/gi)

console.log(matchingDanas)
console.log(matchingDanas1)


// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u stringu  na koji primenjujemo metodu
//DOZVOLJEN DRUGI ARGUMENT (ODAKLE KRECE POTRAGA)
const isPresence =recenica2.includes("omar")
const isPresence1 =recenica2.includes("danas")
const isPresence2 =recenica2.includes("danas",60)
console.log(isPresence)
console.log(isPresence1)
console.log(isPresence2)
//startsWith()i endsWith() metode nam vracaju bollean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode
const startwith=recenica2.startsWith("danas")
console.log(startwith)
const startwith1=recenica2.endsWith("danas")
console.log(startwith1)
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//js  template literals //

//bolja praksa je koristiti je koristiti` ` za definisanje stringa
//prednosti:
//1.mozemo koristiti navodnike (obicne il duple) unutar stringa
const recenica3=`neki ljudi "respekt`
//2.dozvoljavaju multiline stringove i kako je ispisano u kodu tako je i u konzoli
const recenica4=`sdlnjfbhskhdgsjdkjsg hjuefhkfdhkfdhkfdhkfadhkfhk  hskhfsahgkfsakhfsakhgfsahgh gkasgkfasgfasgkhfafsk jhhhhhhhhhhhhhhghasgkhafsgafsgkhsfkhghakgsfkhfashkgsafkhgsfakfsah ahgsghkafsghfsagkhafsgkhsfahgafsgfsghksaf`
console.log(recenica4)
//3.interopolacija-omogucava laksi nacin interpolacije promeljivih(izraza)
let a=5
let b=34
const recenica5=`jedna flasa ima zapreminu ${a} druga ${b} a 
flasa ima ${Math.floor(b/a)}`
console.log(recenica5)
//ako se nadje skola nek se vrati pozicija prvog pojavljivanja,ako rec pocinje sa auto nek se vrati poruka bollean true ,ako je recenica parne duzine nek se vrati broj ponavljanja reci kuca
const funkcija=(par)=>{
    brojac=0
    for(let i =par.length-1;i<=0;i--){
        if(par.IndexOf("kuca")===i){
            brojac++
            par.length=par.length-4;
        }
    }
    return brojac;

}
console.log(funkcija("kuca kuca"))


