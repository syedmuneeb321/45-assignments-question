/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result for each of the 
following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in a array 
• Test whether an item is not in a array 

*/

//Tests for equality and inequality with strings 
let country:string="my country is Pakistan";
console.log(`country=='my country is Pakistan'?i predict true`);
console.log(country=='my country is Pakistan');

console.log(`country=='my country is not pakistan'?I predict false`);
console.log(country=='my country is not pakistan');

//Tests using the lower case function 
let myName:string="Ali";
console.log(`myName=='ali'?I predict false`);
console.log(myName=='ali');
console.log(`myName.toLowerCase()=='ali'?I predict true`);
console.log(myName.toLowerCase()=='ali');

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to 

let num:number=33;
console.log(`num==33?I predict True`);
console.log(num==33);
console.log(`num==3?I predict false`);
console.log(num==3);

let no1:number=2;
let no2:number=3;

console.log(`no1>no2?I predict fasle`);
console.log(no1>no2);
console.log(`no1<no2?I predict True`);
console.log(no1<no2);

console.log(`no1>=2?I predict True`);
console.log(no1>=2);

// Tests using "and" and "or" operators 

let num1:number=19;
let num2:number=99;
console.log("I predict true");
console.log(num1==19&&num2==99);
console.log("I predict false");
console.log(num1==10&&num2==33);
//Or operator
console.log("I predict true");
console.log(num1==3||num2==99);
console.log("I Predict fasle");
console.log(num1==3||num2==0);

// Test whether an item is in a array 
const countryList:string[]=["Pakistan","Iran","Turkey","US"];
console.log("I predict true");
console.log(countryList.includes("Iran"))
console.log("I predict fasle");
console.log(countryList.includes("India"));