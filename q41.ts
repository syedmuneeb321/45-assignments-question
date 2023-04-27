/*
41. Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array
*/

const magicianName=["Ali","Faizan","Zohaib","Iqrar"];
function show_magicians(magician:string[]){
    magician.forEach(Element=>{
        console.log(Element);
    });
};

show_magicians(magicianName);