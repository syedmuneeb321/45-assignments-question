/*
42. Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. Call show_magicians() to 
see that the list has actually been modified. 
*/

const magicianName=["Ali","Faizan","Zohaib","Iqrar"];

function show_magicians() {
   for(let i=0;i<magicianName.length;i++){

        console.log(magicianName[i]);
   };
};

function make_great() {
    for(let i=0;i<magicianName.length;i++){
        magicianName[i]=`${magicianName[i]} the great`;
    }
}
make_great();
show_magicians()