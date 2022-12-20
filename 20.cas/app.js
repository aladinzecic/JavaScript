//JS number metode

//toString()
//ova metoda prevatra bilo koji tip podatka u string

let x=22
console.log(x)
console.log(typeof x)
let y=x.toString()
console.log(y)
console.log(typeof y)

//toExponential() nam vraca string broja zaokruzen na onoliko decimala koliki je argument metode

let z=55.4532
let w=z.toExponential(2)
console.log(w)
console.log(typeof w)

//toFixed() vraca string broja koji ce biti zaokruzen a onoliko decimala koliki je zapravo argument
let a=55.4532
let b=z.toFixed(2)
console.log(b)
console.log(typeof b)

//toPrecision() metoda nam vraca string broja sa onoliko cifara koliki je argument funkcije
let v=55.4532
let g=v.toPrecision(2)
console.log(g)
console.log(typeof g)

//valueOf() vraca vrednost neke promenljive
console.log(x.valueOf())



function izdvajanje(recenica){
    let recenica1=recenica.toString()
    let i
    let nova="";
    
    for(i=recenica1.length-1;i>=0;i--){
        nova+=recenica1[i]
        
        
    }
    
    if (recenica1===nova){

    return "jeste"}
    else return "nije"
}
console.log(izdvajanje(121))


//funkcija koja ocekuje trocifren broj a vraca dvocifren bez srednje respect

function izdvajanje(recenica){
    if(recenica<100||recenica>1000) return "nije tro"
    a=recenica%10;
    
    c=Math.floor(recenica/100)
return 10*c+a
}
console.log(izdvajanje(311))


function izdvajanje(recenica){
    
    let prebacivanje=recenica.toString()
    let duzina =prebacivanje.length
    if(duzina>3||duzina<3) return "unosi troc"
    else {let parce=prebacivanje.replace(prebacivanje[1],"")
    return parce
    }
}
console.log(izdvajanje(311))

//domaci
// funkcija ocekuje cetvorocifren broj a vraca broj kojem su zamenjene prva i treca i druga i cetvrta


//global js methods

//globalne metode mogu biti primenjene na bilo koji tip podtka 
//predstavicemo 3 najcesce koriscene metode sa brojevima

//1.Number()- vraca broj konvertovan iz argumenta

console.log(Number(23))
console.log(typeof Number(23))
console.log(Number(   23                  ))//krajni razmaci dozvoljeni
console.log(Number("23+5"))//NaN
console.log(Number("23 56"))//NaN
//razmaci nisu dozvoljeni kod Number metode 
console.log(Number("ADSf"))
console.log(Number(23))
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number("23.4"))//23.4
console.log(Number("23,45"))
console.log(Number([]))//0
console.log(Number({}))//NaN


//domaci
// funkcija ocekuje cetvorocifren broj a vraca broj kojem su zamenjene prva i treca i druga i cetvrta
//1234   3412
let nova=""
function cetiri(recenica){
    if(recenica<1000||recenica>=10000) return "los unos"
    else return recenica%10*100+ Math.floor((recenica/10)%10)*1000+ Math.floor((recenica/100)%10) 
    +Math.floor(recenica/1000)*10
}
console.log(cetiri(1234))











