// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// const d=+prompt("unesi duzinu terena izmedju 90 i 120");
// const s=+prompt("unesi sirinu terena izmedju 45 i 90");
// const r=+prompt("unesi unesi rastojanje od terena izmedju 2 i 10");
// if(d>=90 && d<=120 && s>=45 && s<=90 && r>=2 && r<=10){
//     console.log(2*d+2*s+8*r)
// } 
// else{
//     console.log("uneli ste lose vrednosti")
// }




// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// let a=+prompt("unesi prvi broj a:");
// let b=+prompt("unesi drugi broj b:");
// let suma=0;
// let brojac=0;
// if(b>a){
// for(a;a<=b;a++){
//     if(a%5===0){
//         suma=suma+a;
//         brojac++
        
//     }
    
    
// }

// }
// else if (a>b){
//     for(b;b<=a;b++){
//         if(b%5===0){
//             suma=suma+b;
//             brojac++
            
//         }
        
//     }
// }
// else {
//     console.log("uneli ste lose vrednosti")
// }
// console.log(suma/brojac);




// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.

// let a=+prompt("unesi broj izmedju (ukljucujuci) 12 i 16:");

// if(a>=12 && a<16){
//     for(a;a>=1;a--){
//         console.log(a)
//         console.log(a*a)
//         console.log(a-25)
//     }
// }
// else console.log("uneta netacna vrednost")
