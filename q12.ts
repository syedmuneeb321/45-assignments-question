/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
name, print a message to them. The text of each message 
should be the same, but each message should be personalized with the person’s name. 

*/

const friends:string[]=["Ali","Ahmad","Faizan","Haider","Asad"];
friends.forEach(friend=>{
    console.log(`I am glad to have you as my friend: ${friend}`);
});