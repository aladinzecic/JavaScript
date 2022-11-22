//funkcija u jsu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste
//mozemo je definisati putem :
//function keyworda
//arrow function sintakse

//1. function keyword

//pravimo funkciju koja sabira broj 3 i 5
// function zbir(){
//   const zbir=3+5;
//   return zbir;

//  }
//  console.log(zbir())


 //funkcija za sabiranje brojeva
//  function zbir(par1,par2){//par1 i par2 predstavljaju parametre funkcije
//     return par1+par2;
//  }
//  console.log(zbir(5,22))


// function zbir(par1,par2){
//     return par1**2+par2**2;
// }
//difoltna vrednost parametra
// // funkcija koja vraca kvadrat dva broja ako se izostavi drugi argument funkcija ga racuna kao 0
// function zbir(a,b){
//     if(b===undefined){
//         return a**2;
//     }
//     else return a**2+b**2;
// }
// console.log(zbir(2,3))

// //2nacin
// function zbir1(a,b=0){
//     return a**2+b**2;
// }
// console.log(zbir1(2))
//prvo idu nedifoltne vrednosti a na kraju difoltne ue

//definisanje funkcije preko function
// const arvredn=function(par1=0,par2=0,par3=0){
//     return (par1+par2+par3)/3;
// }
// console.log(arvredn(2,3))
let a ,b;
function povrsina(a,b){
    if(a===b){
        return("povrsina kvadrata je "+a**2)
    }
    else return("povrsina pravougaonika je"+a*b)
}
console.log(povrsina(1,3))

