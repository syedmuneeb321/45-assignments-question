/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
dinner, and you have space for only two guests. 

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner. 

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
a name from your list, print 

a message to that person letting them know you’re sorry you can’t invite them to dinner. 

• Print a message to each of the two people still on your list, letting them know they’re still invited. 

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end 
of your program. 



*/
const guestList:string[]=["Ali","Ahmad","Faizan"];
//console.log("\nHello friends i have a good news.I have found a bigger dinner table\n");
guestList.unshift("Laiba");
guestList.splice(2,0,"Sahil");
guestList.push("Akram");

console.log(`Sorry friends,'i have space only two people'\n`);
for(let i=1;i<=4;i++){
    console.log(`Sorry ${guestList.pop()} , 'I can't invite you'`);
}
guestList.forEach(guest=>{
    console.log(`Hi! ${guest} your are still invite my home for dinner`)
});