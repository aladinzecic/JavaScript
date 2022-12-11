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


// function rec(recenica,slovo){
//     let b=""
//     for(let i=0;i<recenica.length;i++){
//         if(recenica[i]!==slovo){
//             b+=recenica[i]
//         }
        
//     }
//     return b

    
// }
// console.log(rec("ja idem ja idem","a"))



// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

// function izdvajanje(recenica,br){
//     let result=recenica.slice(recenica.length-br)
//     return result
// }
// console.log(izdvajanje("Pera ima devojku",5))


// function izdvajanje(recenica){
//     let nova="";
//     for(let i=0;i<recenica.length;i++){
//         if(recenica.length%2!==0&&i===recenica.length-1){
//             nova+=recenica[i]
//         }
//         else if(i%2===0){
//             nova+=recenica[i+1]
//         }
//         else if(i%2!==0){
//             nova+=recenica[i-1]
//         }
        
        
//     }
//     return nova
// }
// console.log(izdvajanje("pera ima devojku."))


// function izdvajanje(recenica1,recenica2){
//     let nova="";
//     if(recenica1.length>recenica2.length){
//         for(let i=0;i<recenica2.length;i++){
            
//             nova+=recenica1[i]
//             nova+=recenica2[i]
//         }
//         for(i=recenica2.length;i<recenica1.length;i++){
//             nova+=recenica1[i]

//         }
//     }
//     else{
//     for(let i=0;i<recenica1.length;i++){
        
//         nova+=recenica1[i]
//         nova+=recenica2[i]
//     }
//     for(i=recenica1.length;i<recenica2.length;i++){
//         nova+=recenica2[i]

//     }
//     }
    

//     return nova
// }
// //moze i uslov recenica[i]!== undefined
// console.log(izdvajanje("pera","sladoled"))



function izdvajanje(recenica){
    let i=0
    let nova="";
    for(i=0;i<recenica.length;i++){
        nova+=recenica[i]
        if(recenica[i+1]==="_"||recenica[i+1]==="." ||recenica[i]!==isNaN){
            break
        }
        
        
    }
    nova+="..."
    const position=recenica.search("@")
    for(let i=position;i<recenica.length;i++){
        nova+=recenica[i]
    }

    return nova
}
console.log(izdvajanje("aladin5zecic@gmail.com"))














