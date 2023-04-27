/*
2. Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username. 
• Make a list of five or more usernames called current_users. 
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list. 
*/
const current_Users:string[]=["Ali","Hamza","Faizan","Haris","Sehrish"];
const new_Users:string[]=["Ahmad","Khizar","faizan","Zohaib"];

for(let i=0;i<current_Users.length;i++){
    
    for(let j=0;j<new_Users.length;j++){
        if(current_Users[i].toLowerCase()===new_Users[j].toLowerCase()){
            console.log(current_Users[i]);
        };
        console.log("not end")
    };
};
console.log('end of the program');