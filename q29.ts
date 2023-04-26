/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array. 
• Make a array of your three favorite fruits and call it favorite_fruits. 
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement, 
such as You really like bananas!
*/
const favorite_Fruits:string[]=["Apple","Orange","Cherry"];

if(favorite_Fruits.includes("Apple")){
    console.log("I like Apple");
};
if(favorite_Fruits.includes("Cherry")){
    console.log("I like cherry");
};
if(favorite_Fruits.includes("Orange")){
    console.log("I like Orange")
};
if(favorite_Fruits.includes("Bananas")){
    console.log("I dont like bananas");
};
if(favorite_Fruits.includes("grape")){
    console.log("I dont like grapes");
};