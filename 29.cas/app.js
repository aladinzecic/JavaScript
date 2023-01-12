// //callback funkcija predstavlja funckiju koju saljemo kao argument neke druge funkcije
// //sam argument ne treba da bude izvrsavanje callback funkcije vec referenca na datu funkciju
// function funkcija(func) {
//   console.log("radnja");
//   func();
//   console.log("kraj");
// }

// function callback() {
//   console.log("radnja");
// }
// funkcija(callback);

//napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja a celu stvar
const mainfunction = (callback) => {
  console.log("prvi broj stepenovan drugim");
  callback(2, 3);
};

const callback = (par1, par2) => {
  console.log(par1 ** par2);
};
mainfunction(callback);
