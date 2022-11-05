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

const recenica ="sledece subote cemo imati test koji predstavlja kraj prvog ciklusa.nakon nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it kampa"

let novaRecenica=""
for(let i=0;i<recenica.length;i++){
    
    if(recenica[i+1] ===" " ||recenica[i+1]==="."){
        novaRecenica+=recenica[i].toUpperCase()
    }
    else if(i===recenica.length-1){
                novaRecenica+=recenica[i].toUpperCase()
            }
    else novaRecenica+=recenica[i]
}
console.log(novaRecenica)
