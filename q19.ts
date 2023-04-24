/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
indicating the number 
of people you are inviting to dinner. 

*/
const guestList:string[]=["Ali","Ahmad","Faizan"];
//console.log("\nHello friends i have a good news.I have found a bigger dinner table\n");
guestList.unshift("Laiba");
guestList.splice(2,0,"Sahil");
guestList.push("Akram");

//console.log(`Sorry friends,'i have space only two people'\n`);
for(let i=1;i<=4;i++){
    //console.log(`Sorry ${guestList.pop()} , 'I can't invite you'`);
    guestList.pop();
}
guestList.forEach(guest=>{
    // console.log(`Hi! ${guest} your are still invite my home for dinner`)
});
console.log(`Number of guest invite tonight dinner ${guestList.length}`);