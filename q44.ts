/*
44. Sandwiches: Write a function that accepts a array of items a person wants 
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich 
that is being ordered. Call the function three times, using a different number 
of arguments each time
*/
let items:string[]=[];
function Sandwiches(...item:string[]){
    items.push(...item);
    console.log(`these items use make for sandwiche:${items.join(",")}`);

};

Sandwiches("ketchup","malaiboti","cheese");
Sandwiches("bbq souce","vegetables","bbq","mayonnaise");
Sandwiches("cheese", "beef","hot and chilli souce");