//1.osnovi tipovi podataka
//(primitivni tipovi)
//(vrednosni tipovi podataka)

//2. neprimitivni tipovi podataka
//(referentni tipovi podataka)

let brojgodina = 26;
let brojtvojihgodina = brojgodina;
console.log(brojtvojihgodina);
brojtvojihgodina = 22;
console.log(brojtvojihgodina);
console.log(brojgodina);
let godine1 = [12, 23, 14, 67, 43];
let novegodine = godine1; //ukoliko izjednacimo referentne tipove podataka one ce biti povezane i imace istu memoriju i
//jedna promena na jedan ce uticati na drugi
console.log(novegodine);
