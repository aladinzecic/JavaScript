// function mala(recenica){
//     let brojac=0;
//     for(let i=0;i<recenica.length;i++){
//         if(recenica[i]===recenica[i].toLowerCase()&&recenica[i]!==" "){
//             brojac++
//         }
        
//     }
//     return brojac;
// }
// console.log(mala("ja sam JA"))
// function mala(recenica){
//     let brojac1=0;
//     let brojac2=0;
//     for(let i=0;i<recenica.length;i++){
//         if(recenica[i]===recenica[i].toLowerCase()&&recenica[i]!==" "){
//             brojac1++
//         }
//         else if(recenica[i]===recenica[i].toUpperCase()&&recenica[i]!==" "){
//             brojac2++;
//         }
        
//     }
//     if(brojac1>brojac2) return "ima vise malih"
//     else return "ima vise velikih"
// }
// console.log(mala("ja sam JAAAAA"))

// function mala(recenica){
//     let recenica1=" "
//     for(let i=0;i<recenica.length;i++){
//         recenica1+=recenica[i].toLowerCase()
        
//     }
//     return recenica1
    
// }
// console.log(mala("ja sam JAAAAA"))


// function mala(recenica){
    
//         let indeks=recenica.lastIndexOf(" ");
        
    
//     return indeks
    
// }
// console.log(mala("ja sam JAAAAA"))


// function mala(recenica){
    
//     let indeks=recenica.indexOf(" ");
    

// return indeks

// }
// console.log(mala("ja sam JAAAAA"))
// function mala(recenica,indeks){
    
//     let nova=" "
//     for(i=0;i<indeks;i++){
//         nova+=recenica[i]
//     }
    

// return nova

// }
// console.log(mala("ja sam JAAAAA",5))



//je li recenica ana voli milovana il jok

// function ana(recenica){
//     let brojac=1
//     let i
//     let nova=" "
//     for(i=0;i<recenica.length;i++){
//         if(recenica[i]===" "){
//             continue
//         }
//         else nova+=recenica[i].toLowerCase()
//     }
//     let duzina=nova.length
//     for(i=0;i<duzina/2;i++){
//         if(nova[i]===nova[duzina-brojac]){
//             brojac++
//         }
//     }
//     if(brojac===duzina/2) return "respect"
//         else return "nije"
    
// }
// console.log(ana("ana VOlI milovana"))


// function rec(recenica){
//     let indeks1=recenica.indexOf(" ");
//     let indeks2=recenica.lastIndexOf(" ");
//     let result = recenica.slice(0, indeks1)
//     let result1 = recenica.slice(indeks2+1)
//     const recenica2=result.concat(" ",result1)
    
//     return recenica2
// }
// console.log(rec("ja idem ja idem"))


// function rec(par1,par2,par3){
//     let recenica2=""
//     let result1 = par1.substr(par2,par3)
    
//     return result1
// }
// console.log(rec("ja idem ja idem",2,5))


function rec(recenica,slovo){
    let b=""
    for(let i=0;i<recenica.length;i++){
        if(recenica[i]!==slovo){
            b+=recenica[i]
        }
        
    }
    return b

    
}
console.log(rec("ja idem ja idem","a"))




