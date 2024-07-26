//let and const are block scope var is global 
//Let variables can be updated but not redeclared
//const variables cannot be updated or redeclared
//var may be both updated and redecalred

// num = 246
// console.log(num);

let num = 246
let num4 = 345
console.log(num4);

const num3 = 234    //constant value cannot be reasigned
console.log(num3);


//Block scope

//let and const blocked scope
//var global scope

{
    var x = 2
    // console.log(x);
}
console.log(x)

var y = 10
var y = "Ayush"
console.log(y);


n = 234

if (n % 2 === 0) {
    console.log('even');
    global = 'this should be global scope'
    let nature = "good"
    const p = 21
    console.log(p);
    console.log(nature);
}
else {
    console.log('odd');
}
console.log(global);
// console.log(p);






















