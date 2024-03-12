const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    let person = {
        name: {
            firstName: firstName,
            lastName: lastName
        },
        age: age,
        gender: gender,
        interests: interests,
        greeting: function() {
            console.log(`Hi there! My name is ${this.name.firstName} ${this.name.lastName}.`);
        },
        bio: function() {
            let interestsStr = this.interests.join(", ");
            return `${this.name.firstName} ${this.name.lastName} is a ${this.age}-year-old ${this.gender} who enjoys ${interestsStr}.`;
        }
    };
    return person; 
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Ethan", "Smith", 28, "Male", ["playing guitar", "biking", "photography"]);
person1.greeting();
/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        firstName: firstName,
        lastName: lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function() {
        console.log(`Hi there! My name is ${this.name.firstName} ${this.name.lastName}.`);
    };
    this.bio = function() {
        let interestsStr = this.interests.join(", ");
        return `${this.name.firstName} ${this.name.lastName} is a ${this.age}-year-old ${this.gender} who enjoys ${interestsStr}.`;
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("David", "Johnson", 35, "Male", ["cooking", "hiking", "reading"]);
person2.greeting();

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
 function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        firstName: firstName,
        lastName: lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    // Function to generate the bio of the person
    this.bio = function() {
        let interestsStr = this.interests.join(", ");
        return `${this.name.firstName} ${this.name.lastName} is a ${this.age}-year-old ${this.gender} who enjoys ${interestsStr}.`;
    };

    // Function to greet the person
    this.greeting = function() {
        console.log(`Hi there! My name is ${this.name.firstName} ${this.name.lastName}.`);
    };
}
let newPerson = new Person("Alex", "Johnson", 30, "Male", ["hiking", "photography", "reading"]);
newPerson.greeting();
console.log(newPerson.bio());

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
car.make = "Lamborghini";
car.model = "Aventador";
car.year = 2025;
car.color = "Carbon Black";
car.start = function() {
    console.log("The car is started.");
};
car.mileage = 1500;
car.drive = function(distance) {
    console.log(`The car has driven ${distance} miles.`);
    this.mileage += distance;
};
car.make = "Ferrari";
car.color = "Rosso Corsa";
car.drive(200);
console.log(`This is a ${car.color} ${car.make} ${car.model} from ${car.year} with ${car.mileage} miles.`);


/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
console.log(anotherCar.make);
anotherCar.make = "Bugatti";
console.log(anotherCar.make);
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
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS