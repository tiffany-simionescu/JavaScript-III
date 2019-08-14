/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding 
        - The value for 'this' will be the Window or Console Object, while in the Global Scope.

* 2. Implicit Binding 
        - The object to the left of the dot is what 'this' refers to. This is usually done when a function / method is called by the object.

        Example: obj.method();  // obj === this

* 3. New binding 
        - When you use the 'new' keyword to create a new object from a constructor function, the 'this' keyword refers to the new instance of the created object.

* 4. Explicit binding 
        - You can explicitly define / override what the constructor function gets set to. You can do this with the 'call' and 'apply' methods.
*
* write out a code example of each explanation above
*/

// Principle 1

function principleOne(name) {
  // Window / Global Scope for this keyword
  console.log(this);
  return name;
}
console.log(principleOne("Window/Global Object Binding "));

// Principle 2

// myGreeting Object
const myGreeting = {
  name: "Tiffany",
  age: 31,
  sayHello: function(greet) {
    console.log(this);
    console.log(
      `${greet} my name is ${this.name}. I am ${this.age} years old.`
    );
  }
};

// Passing argumnet to myGreeting Object
myGreeting.sayHello("Konnichiwa");

// Principle 3

// Constructor Function for aboutMyChild
function AboutMyChild(name, pronoun, food, color) {
  this.name = name;
  this.pronoun = pronoun;
  this.favFood = food;
  this.favColor = color;
}

// Created a prototype property for the speak function outside of the Constructor Function
AboutMyChild.prototype.speak = function() {
  console.log(this);
  console.log(
    `My child's name is ${this.name}. ${this.pronoun} loves ${
      this.favFood
    } and the color ${this.favColor}.`
  );
};

// Creating new Objects dougie and sophie using the new keyword with the aboutMyChild function constructor.
const dougie = new AboutMyChild("Dougie", "He", "pizza", "green");
const sophie = new AboutMyChild("Sophie", "She", "chips", "pink");

// Applying the speak property from the function constructor aboutMyChild
// Invoking
dougie.speak();
sophie.speak();

// Principle 4

// tiffObjFavs Object
const tiffObjFavs = {
  name: "Tiffany",
  favColor: "blue",
  favFood: "taquitos",
  favBook: "The Da Vinci Code by Dan Brown"
};

// An Array of skills
const myArraySkills = ["HTML5", "CSS3", "JavaScript", "Node.js"];
// Node.js shouldn't show up when I use the apply method on the allAboutMe function.

// The parameters will take the first values of myArraySkills array as arguments. //
function allAboutMe(param1, param2, param3) {
  // The this keyword will apply to the tiffObjFavs.
  console.log(this);
  return `Hi, my name is ${this.name}. My favorite food is ${
    this.favFood
  }, my favorite color is ${this.favColor}, and my favorite book is ${
    this.favBook
  }. When it comes to web developement, I am skilled at ${param1}, ${param2} and ${param3}.`;
}

console.log(allAboutMe.apply(tiffObjFavs, myArraySkills));
