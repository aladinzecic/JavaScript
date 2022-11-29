// // replace() metoda vrsi zamenu nekoliko karaktera datog stringa.ima 2 argumenta.
// // po swdoaltu replace metoda menja samo prvo pronalazenje datog stringa 
// const recenica="Danas smo podelili serifikate za HTML CSS I JS"
// // const recenica2=recenica.replace("Danas","juce")
// // console.log(recenica2)//replace pronalazi samu prvo ponavljanje a ne i drugi..
// // const recenica="Danas smo podelili serifikate za HTML CSS I JS"
// // const recenica2=recenica.replace("s","t")
// // console.log(recenica2)
// // za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions

// // g(global)
// // let recenica2=recenica.replace(/s/g,"t")
// // console.log(recenica2)
// let recenica2=recenica.replace(/s/i,"A")
// console.log(recenica2)

// //metoda za pretvaranje slova  velika je toUpperCase()
// console.log(recenica2.toUpperCase())
// //metoda za pretvaranje slova  mala je toUpperCase()
// console.log(recenica2.toLowerCase())

// //concat() spajanje dva ili vise stringova 
// let a= "Danas je 16.cas JSa"
// let b="Bice JSa i preko 50 casova"
// let c=a+" "+b
// c=a.concat(b)
// c=a.concat(" ",b,"\nnakon toga react")
// console.log(c)

//napomena 
//sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti )


//napravi funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece :
//ako dati string ima vecu duzinu od 9 uzima:
//pravi novi string koji ce biti isecak duzine od pola do kraja originalnog stringa 
//nakon toga novom stringu menjamo sva mala slova "a" sa "B",i funckija ce vratiti novi string koji je 
//sastavljen od "ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka 
//a ako je <=9 funkcija treba vratiti poruku :
// argument +{duzina}+"nedovoljno za dalje ispitivanje"
const funkcija=function(recenica){
    if(recenica.length>9){
        let polaDuzine
        // if(recenica.length%2===0){
        //     polaDuzine=recenica.length/2
        // }
        // else if(recenica.length%2!==0)
        // polaDuzine =Math.ceil(recenica.length/2)
        polaDuzine=recenica.length%2===0
        ? recenica.length/2
        :Math.ceil(recenica.length/2)
    const isecak=recenica.slice(polaDuzine,recenica.length)
    const novaRecenica=isecak.replace(/a/g,"B")
    const konacno="ovo je novodobijena recenica, ".concat(novaRecenica)
    return konacno 
    }
    else {
        const recenica2=recenica.concat(recenica.length,"nedovoljno za dalje ispitivanje")
        return recenica2
    }
}
console.log(funkcija("manje od 10aa"))

