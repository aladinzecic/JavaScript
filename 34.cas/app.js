// function funkcija() {
//   console.log("ovo je glavna funkcija");
//   return funkcija2(1, 2, 3);
// }
// function funkcija2(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(funkcija());

//CLOSURE FUNKCIJA

//poznata je cinjenica da kada se izvrsi funkcija sve njene lokalne promenljive pokupi garbage colector
//i one prstaju da postoje u memoriji.
//mejutim to nije slucaj za funkcije cije promenljive zahteva neka druga funkcija

//Closure je funkcija koja ima pravo da pristupa pormenljivim iz domena druge funkcije
//to se najcesce postize ugradjivanjem funkcije unutar druge funkcije nakon cega se postize tzv. Block chain

// function first() {
//   const prom1 = "hi";
//   return `${prom1} guys`;
// }
// console.log(first());
// console.log(prom1);

function second() {
  const a = 5;
  const b = 9;
  function closure(c) {
    return a * c;
  }
  return closure(3);
}
console.log(second());
