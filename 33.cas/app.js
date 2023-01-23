const prom1 = 55; //55
const prom2 = !55; //false
const prom3 = !!55; //true
const prom4 = !!true; //true
const prom5 = !""; //true
const prom6 = !(55 + ""); //false
console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);

//hoisting kod funkcija
// add(10, 15);
// //ovo radi
// function add(a, b) {
//   console.log(a + b);
// }

// hello("mehmede");
//ne vazi za arrow funkciju jer moramo da definisemo funkciju preko const
// const hello=(par){
//     console.log(`heloo ${par}`)
// }

//REKRUZIVNE FUNKCIJE

//poziva izvrsenje same sebe ubutar funckije
//efekat petlje mozemo postici rekruzivnom funkcijom

//ispisi br od 10 do 1

// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }
const ispisivanje = (n) => {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  }
};
ispisivanje(10);

//32. Write a JavaScript function to find an array contains a specific element. Go to the editor

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
function funkcija2(niz, n) {
  for (i = 0; i < niz.length; i++) {
    if (niz[i] === n) return "sadrzi";
  }
  return "ne sadrzi";
}
console.log(funkcija2([1, 2, 3, 5, 6, 7, 8, 12], 18));
