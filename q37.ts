/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt and a 
medium shirt with the default message, and a shirt of any size with a different 
message. 

*/
function make_shirt(size:string,text:string="I Love TypeScript"){
    console.log(`The size of shirt ${size} and message is ${text}`);
};
make_shirt("small");
make_shirt("medium");
make_shirt("Large","I love javascript");