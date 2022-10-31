//while petlja nam omogucava iteraciju kroz neki objekat nekoliko puta uz potencijalno odredjene uslove
//kod while petlje je neophodno na kraju koda definisati povecanje iteratora kako ne bismo dobili beskonacnu petlju

//sintaksa

// while(uslov){
//blok koda za izvrsavanje
//definisati povecanje iteratora
// }
// let i=1;
// while(i<11){
//     if (i%2===0){
//     console.log(i);
    
//     }
// i++;
// }

//korisnik unosi broj na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do unetog broja
// let i=1;

// let n=+prompt("unesi n:");
    
//     while(i<=n){
//         console.log(i*i)
//     i++;
//     }

// let n=+prompt("unesi n:");
// let m=+prompt("unesi m:");
// if(isNaN (n)||(m)){
//     console.log("brojevi moraju biti brojevi")
// }
// if(n<m){
//     while(n<=m){
//         console.log(n)
//         n++
//     }
// }
// else if(n>m){
//     while(m<=n){
//         console.log(m
//             )
//         m++
//     }

// }
// else if(n===m){
//     console.log("brojevi moraju biti razliciti")
// }


//do while petlja predstavlja poseban slucaj while petlje, gde se prvo izvrsava kod pa tek onda proverava sulov

//sintaksa

// do{
// //blok koda 
// } while(uslov)

//brojevi od 1 do 5
// let broj3=1
// do{
//     console.log(broj3)
//     broj3++
// }while(broj3<=5)

//ispisi sve brojeve manje od 20 krenuvsi od broja koji unosi korisnik
// let broj=+prompt("unesi broj:");
// do{
//     console.log(broj)
//     broj++
// }while(broj<=20)


//preko switch naredbe :
// console.log(new Date().getDay())
// //getDay daje vrednost od 0 do 6 (dani u nedelji 0 nedelja 6 subota)
// //switch(new Date().getDay())
// //na osnovu vrednosti koju nam daje izraz iz switch naredbe kroz casove i eventualno defualt ispisati danas je radni dan 
// a ako pada vikend ispisi ugodno provedi vikend 
switch(new Date().getDay()){
    case 0:
    console.log("neradni dan")
    break;
    case 1:
    console.log("radni dan")
    break;
    case 2:
    console.log("radni dan")
    break;
    case 3:
    console.log("radni dan")
    break;
    case 4:
    console.log("radni dan")
    break;
    case 5:
    console.log("radni dan")
    break;
    case 6:
    console.log("radni dan")
    break;
        
}

