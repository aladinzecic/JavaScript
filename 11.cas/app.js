// napraviti novu recenicu samo bez razmaka
let recenica="Omare jesi li spremio test"
let novaRecenica=""
let brojac=0
for(let i=0;i<recenica.length;i++){
    if(recenica[i]===" "){
        brojac++
}
}
console.log(brojac)
// let recenica=prompt("unesi recenicu")
// let novarecenica=""
// for(let i=0;i<recenica.length;i++){
//     if(recenica[i]=="a"&&recenica[i+1]=="n"){
//         novarecenica+="d"
//     }
//     else if(recenica[i]=="a"){
//         novarecenica+="t"
//     }
//     else novarecenica+=recenica[i]
// }
// console.log(novarecenica)