const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1", "LP1", 10, "Female", ["swimming", "dancing"]);
person1.greeting();

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("P2", "LP2", 90, "Male", ["dancing", "singing"]);
person2.greeting();

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
car.brand = "Honda";
car.model = "Civic";

/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
console.log(anotherCar.brand);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that analyzes the hamburger, too
function makingHamBrgr(bun, cheese, sauce, meatPatty, pattyLayers, garnish, exToppings) {
    // Define the hamburger object
    let hamburger = {};

    // Assign properties to the hamburger object
    hamburger.bun = bun;
    hamburger.cheese = cheese;
    hamburger.sauce = sauce;
    hamburger.meatPatty = meatPatty;
    hamburger.pattyLayers = pattyLayers;
    hamburger.garnish = garnish;
    hamburger.exToppings = exToppings;

    // Define the analyze method of the hamburger object
    hamburger.analyze = function() {
        let description = `Your delicious burger is ready to enjoy! Here's what's in it: Bun: ${this.bun}, Cheese: ${this.cheese}, Sauce: ${this.sauce}, Meat Patty: ${this.meatPatty}, Patty Layers: ${this.pattyLayers}, Garnish: ${this.garnish}`;
        
        if (this.exToppings.length > 0) {
            description += `, Extra Toppings: ${this.exToppings.join(', ')}`;
        }
        return description;
    };

    // Return the hamburger object
    return hamburger;
}

// Example usage:
let myHamburger = makingHamBrgr("Gluten free", "Cheddar", "Garlic and ketchup", "Crispy chicken", 1, "Lettuce, black olives, onion", ["Bacon"]);
console.log(myHamburger.analyze());
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
