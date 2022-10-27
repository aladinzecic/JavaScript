//petlja(loop) predstavlja nacin da se neki kod ispise uz odredjene uslove vise puta

//for petlja -sintaksa

// for (statement1;statement2;statement3){
//     //kod za izvrsavanje u svakoj iteraciji
// }

//statement1 predstavlja definisanje promenljive koja predstavlja iterator
//statement2 predstavlja granicu do koje vrednosti ce iterator da ide
//statement3 predstvalja povecanje ili smanjenje iteratora koje se desi na kraju svake iteracije 


// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//ispisi br od 1 do 10 izuzev 2 i 5
// for (let i=1;i<=10;i++){
//     if(i!==2 &&i!==5 ){
//         console.log(i)
//     }
// }

//continue keyword (rezervisana rec) ako se nadje u nekoj iteraciji,oznacava da se ta iteracija zanemari i da se nastavi dalje sa sledecom
//break keyword predstavlja da od tog trenutka for petlja prestaje sa radom
// for (let i=1;i<=10;i++){
//     if(i===2 ||i===5 ){
//         continue
//     } else{
//         console.log(i)
//     }
// }

//ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7 neka se prekine petlja
// for (let i=1;i<=10;i++){
    
    
//     if (i/7===1){
//         break
//     }
//     else{console.log(i)
//     }  
// }


//ispis parnih brojeva od 1 do 20

for (let i=1;i<=20;i++){
    if(i%2===0){
        console.log(i)
    }
    else {continue}
}


for (let i=2;i<=20;i=i+2){
    console.log(i)
}







