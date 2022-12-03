//split() metoda nam vraca niz na osnovu stringa na koji je primenjena
const recenica="ovde je dnohla al, ce uskoro poceti, grejanje.ako se ne desi bice dnohla"
const niz=recenica.split()
//ako se kod split metode izostavi argument dobicemo niz od 1 elementa
const niz2=recenica.split(",")
console.log(niz2)
const niz3=recenica.split("$")
//napraviti niz od stringa tako da se elementi niza prave do svake reci decembar .rec decembar ne sme biti deo 
//ni jednog elementa niza
const recenica3="Decembar je poslednji mesec u godini.u decembar pocinje zima i decembar je najhladnjiji mesec decembar"
const niz4=recenica3.split(/decembar/i)
console.log(niz4)

//search metoda :
//1. indexOf() vraca nam poziciju gde zapravo pocinje poslati argument 
//(jedan ili vise karaktera ) kada se radi o stringu 
//samo prvo pojavljivajne
const pozicija=recenica3.indexOf("j")
console.log(pozicija)
pozicija2=recenica3.indexOf("mesec")//daje poziciju prvog slova(m)
console.log(pozicija2)
//ukoliko karakter nema poziciju(nema ga unutar stringa) konzola vraca broj -1


//drugi argument predstavlja poziciju od koje cemo da krenemo trazenje datog stringa 
const pozicija3=recenica3.indexOf("mesec",20)
console.log(pozicija3)

//1. lastIndexOf() vraca nam poslednju poziciju gde zapravo pocinje poslati argument 
//(jedan ili vise karaktera ) kada se radi o stringu
const pozicija4=recenica3.lastIndexOf("decembar")
console.log(pozicija4)

//napravi funkciju koja na osnovu parametra ispituje pojavljivanje reci ko osvaja ako se pojavi vise puta vratiti prvo i poslednje pojavljivanje

const funkcija=(par)=>{
    flag=0
    if(1){
        const pozicija1=par.indexOf("ko osvaja") 
        const pozicija2=par.lastIndexOf("ko osvaja")
        return "prvo pojavljivanje je"+ pozicija1+"drugo pojavljivanje je"+pozicija2
        flag++
    }
    else if(flag==0) return "nema ponavljanja"

}
console.log(funkcija("ko osvaja bre ko osvaja"))













