// //stringovi su immutable promenljive,nije moguce vrsiti modifikaciju postojeceg stringa.
// //alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo

// let rec1="Petak"
// console.log(rec1[2])

// // toUpperCase()-metoda koja pretvara ceo string u velika slova 
// let PETAK =rec1.toUpperCase()
// console.log(PETAK)

// //toLowerCase -metoda koja pretvara string u mala slova

// let petak=PETAK.toLowerCase()
// console.log(petak)


// const recenica0="Zelimo DAtU REceNICu PRIkazati MALim isTO takO IvelikiM slOVIMA"
// let nova1=recenica0.toUpperCase()
// let nova2=recenica0.toLowerCase()
// console.log(nova1)
// console.log(nova2)

//ISISATI NOVU RECENICU GDE CE SVAKA REC POCINJATI VELIKIM SLOVOM
// const recenica ="sledece subote cemo imati test koji predstavlja kraj prvog ciklusa nakon nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it kampa"

// let novaRecenica=""
// for(let i=0;i<recenica.length;i++){
//     if(i===0){
//         novaRecenica+=recenica[i].toUpperCase()
//     }
//     else if(recenica[i-1] ===" "){
//         novaRecenica+=recenica[i].toUpperCase()
//     }
//     else novaRecenica+=recenica[i]
// }
// console.log(novaRecenica)

// const recenica ="sledece subote cemo imati test koji predstavlja kraj prvog ciklusa.nakon nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it kampa"

// let novaRecenica=""
// for(let i=0;i<recenica.length;i++){
    
//     if(recenica[i+1] ===" " ||recenica[i+1]==="."){
//         novaRecenica+=recenica[i].toUpperCase()
//     }
//     else if(i===recenica.length-1){
//                 novaRecenica+=recenica[i].toUpperCase()
//             }
//     else novaRecenica+=recenica[i]
// }
// console.log(novaRecenica)


//prebrojati koliko se puta u unetom stringu mojavljuje slovo m i veliko i malo 
// let brojac=0
// let recenica =prompt("unesi neku recenicu")
// for(let i=0;i<recenica.length;i++){
//     if(recenica[i]==="m"||recenica[i]==="M"){
//         brojac++
//     }
    
// }
// console.log(brojac)


//2.prebrojati koliko ima znakova koji su cifre u stringu
// let brojac=0
// let recenica =prompt("unesi neku recenicu")
// for(let i=0;i<recenica.length;i++){
//     if(recenica[i]==="0"||recenica[i]==="1"||recenica[i]==="2"||recenica[i]==="3"||recenica[i]==="4"||recenica[i]==="5"||
//     recenica[i]==="6"||recenica[i]==="7"||recenica[i]==="8"||recenica[i]==="9")
//     {
//         brojac++    
//     }    
// }
// console.log(brojac)


// let brojac=0
// let recenica =prompt("unesi neku recenicu")
// for(let i=0;i<recenica.length;i++){
//     if(!isNaN(recenica[i])){
//         brojac++
//     }
// }
// console.log(brojac)
//uzvicnik je metoda da se okrene boolean ako je true bice false



//unesi broj ispisati njegov kvadrat

// let a=+prompt("unesi broj")

// if(isNaN(a)){
//     console.log("lose unet broj")
// }


//napisati program koji ispisuje u konzoli brojeve od 1 do 100 ukljucujuci sto tako da 
//1. ako je broj deljiv sa tri treba ispisati fizz umesto tog broja ako je deljiv sa 5 ispisati buzz ako je deljiv i 
//sa tri i sa 5 treba ispisati fizz buzz

// for(let i=1;i<=100;i++){
//     if(i%3===0){
//         console.log("fizz")
//     }
//     else if(i%5===0){
//         console.log("buzz")
//     }
//     else if(i%3===0&&i%5===0){
//         console.log("fizz buzz")
//     }
//     else console.log(i)
// }




// let recenica="nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa "
// let recenica1=" "
// console.log(recenica.length)
// for (i=0;i<recenica.length;i++){
//     if(recenica[i-4]==="a"&&recenica[i-5]==="c")
//         recenica1+="."
//     else if(recenica[i]==="a"||recenica[i]==="e"||recenica[i]==="i"||recenica[i]==="o"||recenica[i]==="u")
//     recenica1+=  recenica[i].toUpperCase() 
    
    
//         else if(1) recenica1+=  recenica[i]
        
//     }
//     console.log(recenica1)

console.log(3>2>1)











