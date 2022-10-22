//OPERATORI U JS-u
//delimo ih u 6 grupa:

//1. Ariteticki operatori (aritmetic operators)
//2. operatori dodele vrednosti (assigment operators)
//3. string operatori (string operators)
//4. operatori poredjenja (comparison operators)
//5. logicki operatori (logical operators)
//6. tip operatori (type operators)


//1. Ariteticki operatori (aritmetic operators)
//1.1 + operator sabiranja
console.log(4+5);
//1.2 - operator oduzimanja
console.log(4-5)
//1.3 * operator mnozenja
console.log(4*5)
//1.4 / operator deljenja
console.log(5/4)
//1.5 ** operator stepenovanje
console.log(2 ** 3)
//1.6 % (modul) ostatak pri deljenju
console.log(11%3)
//1.7 ++ operator incrementer (povecava vrednost za jedan)
let x=5
x++;//x++ postfiksni
console.log(x)//x++ =x+1
let y=11;
console.log(++y)//prefiksni

//1.8 -- operator incrementer (smanjuje vrednost za jedan)
let z=99;
z--;//z=99-1 ;postfiksni operator
console.log(z)

let w=65;
console.log(--w)


//uslov za parnost:
// i % 2 =0
//uslov za neparnost:
// i % 2 =1



//2. operatori dodele vrednosti (assigment operators)
//2.1 =  -dodeljivanje vrednosti nekoj promenljivoj
//2.2 += - w=w+5 i prvo mora da je dodeljena vrednost w(dodavanje odredjenu vrednost na postojecu promenljivu)
w=w+5
console.log(w)
//2.3 -=  oduzimanje odredjenu vrednost na postojecu promenljivu

//2.4  *= mnozenje odredjenu vrednost na postojecu promenljivu
z*=2;
console.log(z)
//2.5  /= deljenje odredjenu vrednost na postojecu promenljivu
z/=2;
console.log(z)

//2.6   %= moduo odredjenu vrednost na postojecu promenljivu

//2.7 **= stepenovanje odredjene vrednosti na postojecu promenljivu

y**=2
console.log(y)


//3. string operatori

//jedan od nacina za spajanje stringova je koriscenjem + operatora

let prviDeo ="omar je omar\t"
let drugiDeo ="omar nije omar"
console.log(Boolean(prviDeo +" "+ drugiDeo))


//neki slucAJEVI KOD SABIRANJA
console.log("omar"+3)// string plus broj rezultat je string
console.log(3+"omar")
console.log(typeof(3+"omar"))
console.log(3 + "2") //bez obzira sto 2 moze bit pretvorena u broj nece se izvrsiti sabiranje (rezultat32)
console.log(4-"2") //samo kod plusa spajanje ostale operacije se vrse normalno 
console.log(4*"2")
console.log(4/"2")
console.log(4**"2")
//ako JS ne uspe da prevede string u broj rezultat je NaN
console.log(21/"7dana")//rezultat not a number NaN



//4.OPERATORI POREDJENJA

//4.1 == poredjenje vrednosti 
let a=5
let b=7
let c=a
console.log(a==c)
c+=2;
console.log(c) //ima vrednost 7
console.log(a)//ima vrednost 5

//4.2 === proverava jednakost tipa i jedankost vrednosti
d="5"
console.log(a===d)


//bolje da koristimo ===

//4.3  != proverava razlicitost vrednosti

console.log(b!=c)

//4.4  !== ispituje da li su razliciti ili vrednosti i tip
console.log(a!==d)

//4.5  >  a li je vrednost veca
//4.6  >=  a li je vrednost veca ili jednaka
//4.7  <  a li je vrednost veca
//4.8  <=  a li je vrednost veca ili jednaka
//4.9 ?  ternarni operator 
//uslov ?(radnja koja se izvrsava ako je uslov zadovoljen)
//       :
//          (radnja koja se izvrsava ako uslov nije ispunjen)

let isSunny =true
isSunny  ? console.log("vreme je suncano"+"ponesi naocare") :
console.log("ponesi suncobran"+"i vreme je kisovito")


//5 logicki operator &&  zahteva zadovoljavanje svih uslova

let prom1 = 4
let prom2 = 19
let prom3 = -3
 
prom1>0 && prom2 >0 && prom3>0
? console.log ("sve tri promeljive su pozitivni")
: console.log ("nije")

// 5.1 || or (ili) - zahteva zadovoljavanje makar jednog uslova '



prom1>0 || prom2 >0 || prom3>0
? console.log ("nasli smo")
: console.log ("nismo")

// 5.3 ! not (nikad) 
console.log (!Boolean (prviDeo + "" + drugiDeo));