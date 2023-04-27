/*
5. Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It 
should then accept an arbitrary number of keyword arguments. Call the function 
with the required information and two other name-value pairs, such as a 
color or an optional feature. 
Print the Object that’s returned to make sure all the information was 
stored correctly.
*/

function carInfo(manufacturer:string,model:string,...args:any){
    let car={
        manufacturerName:manufacturer,
        modelName:model,
        argsName:args    
    };
    return car;
};

let carInformation=carInfo("Honda","civic",{color:"black",year:2011});
let carInformation2=carInfo("Toyota","Corolla Altis X",{color:"grey",year:2023},{transmition:"automatic"})
console.log(carInformation.argsName);
console.log(carInformation2);