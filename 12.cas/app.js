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

//treci sa testa
let recenica;
recenica1 = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"

function nova(recenica){
    let recenica2=" ";
    for(let i=0;i<=recenica.length;i++){
        if(i===recenica.length){
recenica2+="."
        }
        else if(recenica[i]==="a"||recenica[i]==="u"||recenica[i]==="o"||recenica[i]==="i"||recenica[i]==="e"){
            recenica2+=recenica[i].toUpperCase()
        }
        else {recenica2+=recenica[i]}
    }
    return recenica2;

}
console.log(nova(recenica1))


//2. arrow function:
// const myFunction=()=>{
    
// // }


// const proizvod=(br1,br2)=>{
//     return br1*br2
// }
// console.log(proizvod)
// //ako arrow funkcija ima samo jedan parametar nije neophodno okruziti ga zagradama 
// //ako je funckija jednostvna tj ako odmah vraca neki jednostavan izraz onda sama sintaksa izgleda 
// //kraca(nije neophodno koristiti viticaste zagrade i return keyword)
// const kvbroja=broj=> broj**2
// let broj1;
// const broj=()=>{
//     broj1=+prompt("unesi broj")
//     if(isNaN(broj1)){
//         return("nije broj")
//     }
//     else if(broj1>0){
//         return ("pozitivan")
//     }
//     else if(broj1<0){
//         return ("negativan")
//     }
//     else if(broj1===0){
//         return ("nula") 9 17

//     }
// }
// console.log(broj(broj1))
const satnica=(par1,par2)=>{
    if(par1>=9&&par1<17&&par2>=0&&par2<=59){
        return ("na vreme")
    }
    else return ("nije")
}
console.log(satnica(10,5))


