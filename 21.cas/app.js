//Number properties
//sledecim konstantama mozemo pristupiti jedino preko Number:
//Number.Property

//napomena
//konstante ne mogu biti primenjene na varijable 

//1. MAX_VALUE-Vraca najveci broj u JS
const najveci=Number.MAX_VALUE
console.log(najveci)
const naj=Number.MIN_VALUE
console.log(naj)

//2.POSITIVE_INFINITY
//3.NEGATIVE_INFINITY
//4.NaN
function izdvajanje(par1,par2,par3){
    let max =par1
    if(par2>max)max=par2
    if(par3>max) max=par3
    return max
    }

console.log(izdvajanje(1,2,3))




function izdvajanje(par1,par2){
    let i
    let brojac1=0
    let brojac2=0
    if(par1>100)
    for(par1;i>=100;i--)
    brojac1++
    else for(i=par1;i<=100;i++)brojac1++
    

    if(par2>100)
    for(i=par2;i>=100;i--)
    brojac2++
    else for(i=par2;i<=100;i++)brojac2++
    if(brojac1>brojac2)return par2
    else if(brojac1==brojac2) return "isti"
    else return par1
}
    

console.log(izdvajanje(50,150))

//
// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


function dva(par1,par2){
    if((par1>40&&par1<60||par1>70&&par1<100)&&(par2>40&&par2<60||par2>70&&par2<100))return "jesu"
    else return "nisu"
}
console.log(dva(45,45))

function veci(par1,par2){
    if((par1<40||par1>60)||(par2<40||par2>60))return "los unos"
    else if(par1>par2) return par1
    else return par2
}
console.log(veci(45,61))
