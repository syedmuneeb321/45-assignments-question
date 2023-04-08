/*
3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase. 

*/

let myName:string="munEeb";
//print the name in lower case
console.log(myName.toLowerCase());
//print the name in upper case
console.log(myName.toUpperCase());
//print the name in title case
let f_name:string=myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase();
console.log(f_name);