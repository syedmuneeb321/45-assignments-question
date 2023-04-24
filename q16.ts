/*
16. More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner. 

• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table. 

• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. 


*/
const guestList:string[]=["Ali","Ahmad","Faizan"];
console.log("\nHello friends i have a good news.I have found a bigger dinner table\n");
guestList.unshift("Laiba");
guestList.splice(2,0,"Sahil");
guestList.push("Akram");

guestList.forEach(guest=>{
    console.log(`Hi! ${guest} your are invite my home for the dinner \n`)
});
