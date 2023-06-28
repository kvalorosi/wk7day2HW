//Excercise 1
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))
console.log(Object.values(person3))


let favs = Object.values(person3);
    for (let i = 0; i < person3.length;i++){
        console.log(person3[i])
    };
console.log("Favorite Pizza:" + (person3.pizza));
console.log("Favorite Tacos:" + (person3.tacos));
console.log("Favorite Burgers:" + (person3.burgers));
console.log("Favorite ice cream:" + (person3.ice_cream));
console.log("Favorite shakes:" + (person3.shakes[0]));//getting an undefined output here??

//Excercise 2
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age; 
    
    this.printInfo = function(){
        console.log(`${name} is ${age} and loves the sunshine.`)
    }
    
    this.hB = function(){
        this.age += 1;
    }

};
let person = new Person('Carl', '39');
person.printInfo();
person.hB();
person.printInfo();
let person1 = new Person('Kevin', '84');
person1.printInfo();

let person2 = new Person('Harriet', '45');
person2.printInfo();

//Not entirely sure how to increase the age each time the function is called...


//Excercise 3

/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let string = ['This is a string']

 let bigNum = (string) => {
    return new Promise((resolve, reject)=> {
        if (string > 10){
        console.log("Big Word");
        }else {
            console.log("small Number")
        }
    })
 }
 bigNum(string)