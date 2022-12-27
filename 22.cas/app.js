// //JS MATH OBJECTS

// //math properties (konstante)

// //1.Math.E -vraca ojlerov broj
// console.log(Math.E);
// //2.Math.PI-vraca pi
// console.log(Math.PI);
// //3.Math.SQRT2-vraca koren
// console.log(Math.SQRT2);
// //4.Math.SQRT1_2-vraca koren 1/2
// console.log(Math.SQRT1_2);
// //5.Math.LN2-vraca ln2
// console.log(Math.LN2);
// //6.Math.LN2-vraca ln10
// console.log(Math.LN10);
// //7.Math.LOG2E-vraca ln2
// console.log(Math.LOG2E);
// //8.Math.LOG10E-vraca ln2
// console.log(Math.LOG10E);

// //MATH METHODS
// // NUMBER TO INTEGER
// //1.Math.round()-vraca ko je blize decimali respektivno
// console.log(Math.round(22.23));
// console.log(Math.round(-22.23));
// //2.Math.ceil()-vraca sledeci ceo broj
// console.log(Math.ceil(22.23));
// console.log(Math.ceil(-22.23));
// //3.Math.floor()-vraca prethodni ceo broj
// console.log(Math.floor(22.23));
// console.log(Math.floor(-22.23));
// //4.Math.trunc()-mice decimalni zapis respektivno
// console.log(Math.floor(22.23));
// console.log(Math.floor(-22.23));

// //Math.sign(number) vraca 1 0 ili -1
// console.log(Math.sign(22.3));
// console.log(Math.sign(-22.4));
// console.log(Math.sign(0));

// //Math.pow(number,power) vraca broj stepenovan na neko broj
// console.log(Math.pow(4, 3));

// //Math.sqrt(number) vraca broj stepenovan na neko broj
// console.log(Math.pow(4));

// //Math.abs(number)-vraca abs
// console.log(Math.abs(-4.23));

// //Math.sin(radians)-mora od -1 do 1
// console.log(Math.abs(0));

// //Math.cos(radians)-mora od -1 do 1
// console.log(Math.abs(0));

// // function radijani(par) {
// //   return (par * 180) / Math.PI;
// // }
// // console.log(radijani(Math.PI / 6));

// // function obim(par) {
// //   return 2 * r * Math.PI;
// // }
// // console.log(obim(2));

// // function povrsina(par) {
// //   r = r / 2;
// //   return r ** 2 * Math.PI;
// // }
// // console.log(povrsina(2));
// //Math.min() nam vraca najamnji broj od poslatih.moze imati neograniceno
// console.log(Math.min(1, 2, 3, -45, 46));
// //Math.min() nam vraca najveci broj od poslatih.moze imati neograniceno
// console.log(Math.min(1, 2, 3, -45, 46));
// //ove dve metode ne rade u nizovima
// const najmanji = Math.min.apply(null, [12, 34, 53]); //moze samo ovako
// console.log(najmanji);
// //Math.random()nam daje broj izmedju nula(ukljucujuci) i jedan(iskljucujuci)
// const random = Math.random(); //moze samo ovako
// console.log(random);
// const random1 = Math.round(Math.random() * 5 + 5); //od 5 do 10
// console.log(random1);
// //Math.log(x)-osnova e
// //Math.log2(x)-osonva2
// //Math.log10(x)-osnova 10

// function rastojanje(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }
// console.log(rastojanje(1, 0, 2, 0));

// function pobednik(x1, x2, x3, x4) {
//   if (x1 + x2 > x3 + x4) return "prvi";
//   else if (x1 + x2 < x3 + x4) return "drugi";
//   else if (x1 + x2 === x3 + x4 && x1 > x3) return "prvi";
//   else if (x1 + x2 === x3 + x4 && x1 < x3) return "drugi";
//   else if (x1 + x2 === x3 + x4 && x1 === x3) return "prvi";
// }
// console.log(pobednik(40, 40, 40, 50));

// function nzd(x, y) {
//   let broj;
//   let i = 1;
//   for (i = 1; i <= x; i++) {
//     if (x % i == 0 && y % i == 0) broj = i;
//   }
//   return broj;
// }
// console.log(nzd(2, 4));

// nadji nzs
// npr 2 i 4 je 4
// npr 4 i 5 je 20;
function nzs(x, y) {
  i = 1;
  while (1) {
    if (i % x == 0 && i % y == 0) return i;
    i++;
  }
}
console.log(nzs(3, 7));
