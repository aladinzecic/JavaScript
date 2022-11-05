// let recenica ="danas cemo raditi operacije sa stringovima"
// console.log(recenica)
// let rec="abcdef"
// //pristuanje nekom karakteru stringa
// //indeksiranje ide od nule
// //u svakom iterirajucem objektu,poslednji karakter ima vrednost ukupnda duzina stringa -1
// console.log(rec[0])
// //metoda za dobijanje duzine stringa
// let duzinaRecenice =recenica.length
// console.log(duzinaRecenice)
// console.log(rec.length)


// const duzina =recenica.length
// for(let i=0;i<duzina;i++){
//     console.log(recenica[i])
// }

//na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog dok ako je neki karakter ="a" neka se ispise 5,dok ako je karakter s neka se ne ispise nista
const recenica=prompt("unesite neku recenicu")
const duzina=recenica.length
for(let i=0;i<duzina;i++){
    if(recenica[i] ==="a"){
        console.log(5)
    }
    else if(recenica[i]==="s"){
        continue

    }
    else console.log(recenica[i])
}
