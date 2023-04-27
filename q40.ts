/*

40. Album: Write a function called make_album() that builds a Object 
describing a music album. The function should take in an artist name and an 
album title, and it should return a Object containing these two pieces of 
information. Use the function to make three dictionaries representing different 
albums. Print each return value to show that Objects are storing the 
album information correctly. 
Add an optional parameter to make_album() that allows you to store the 
number of tracks on an album. If the calling line includes a value for the number 
of tracks, add that value to the album’s Object. Make at least one new 
function call that includes the number of tracks on an album. 

*/


function make_album(artistName:string,albumTile:string,numberOfTracks?:string){
    let music_album={
        artistName,
        albumTile,
        numberOfTracks
    };
    return music_album;
};

let result=make_album("Atif Aslam","jal pari");
console.log(result);
let result2=make_album("Ali Zafar", "Masty");
console.log(result2.artistName);
let result3=make_album("Faakhir", "Mantra", "11");

console.log(result3.numberOfTracks);