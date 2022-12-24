//JS MATH OBJECTS

//math properties (konstante)

//1.Math.E -vraca ojlerov broj
console.log(Math.E);
//2.Math.PI-vraca pi
console.log(Math.PI);
//3.Math.SQRT2-vraca koren
console.log(Math.SQRT2);
//4.Math.SQRT1_2-vraca koren 1/2
console.log(Math.SQRT1_2);
//5.Math.LN2-vraca ln2
console.log(Math.LN2);
//6.Math.LN2-vraca ln10
console.log(Math.LN10);
//7.Math.LOG2E-vraca ln2
console.log(Math.LOG2E);
//8.Math.LOG10E-vraca ln2
console.log(Math.LOG10E);

//MATH METHODS
// NUMBER TO INTEGER
//1.Math.round()-vraca ko je blize decimali respektivno
console.log(Math.round(22.23));
console.log(Math.round(-22.23));
//2.Math.ceil()-vraca sledeci ceo broj
console.log(Math.ceil(22.23));
console.log(Math.ceil(-22.23));
//3.Math.floor()-vraca prethodni ceo broj
console.log(Math.floor(22.23));
console.log(Math.floor(-22.23));
//4.Math.trunc()-mice decimalni zapis respektivno
console.log(Math.floor(22.23));
console.log(Math.floor(-22.23));

//Math.sign(number) vraca 1 0 ili -1
console.log(Math.sign(22.3));
console.log(Math.sign(-22.4));
console.log(Math.sign(0));

//Math.pow(number,power) vraca broj stepenovan na neko broj
console.log(Math.pow(4, 3));

//Math.sqrt(number) vraca broj stepenovan na neko broj
console.log(Math.pow(4));

//Math.abs(number)-vraca abs
console.log(Math.abs(-4.23));

//Math.sin(radians)-mora od -1 do 1
console.log(Math.abs(0));

//Math.cos(radians)-mora od -1 do 1
console.log(Math.abs(0));

function radijani(par) {
  return (par * 180) / Math.PI;
}
console.log(radijani(Math.PI / 6));

function obim(par) {
  return 2 * r * Math.PI;
}
console.log(radijani(2));

function povrsina(par) {
  r = r / 2;
  return r ** 2 * Math.PI;
}
console.log(radijani(2));
