/*
14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a 
list that includes at least three people you’d like to 
invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 

*/
let inviteList:string[]=["Ali","Ahmad","Faizan"];
let message:string="you are invite to my home for dinner";
inviteList.forEach(friend=>{
    console.log(`Hi! ${friend} ${message}`);
});