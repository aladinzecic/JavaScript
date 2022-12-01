//trim() metoda brise razmake sa obe strane stringa
const recenica="   shfshhfs sa asnkdadkankad     ".trim()
console.log(recenica)


//postoje 3 metode za ekstrktovanje (uzimanje) jednog karaktera nekog stringa

//1. charAt(index)-vraca nam karakter nekog stringa za poslatim indeksom
//2. charCodeAt(index)-vraca nam kod karaktera nekog stringa za poslatim indeksom
//3.sting[index]-slicno charAt metodi sa jednom razlikom 

const novarecenica="Spava mi se"
const char1=novarecenica.charAt(4)//ako damo prevelik indeks koji ne postoji dobijamo prazan string u konzoli
console.log(char1)
const char2=novarecenica.charCodeAt(3)
console.log(char2)//ne valja nista
const char3=novarecenica[4]//ovde ako unesemo nepostojeci(velik) indeks dobijamo undefined
console.log(char3)
