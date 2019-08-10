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
  console.log(this);
  return name;
}
console.log(principleOne("Window/Global Object Binding "));

// Principle 2

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
myGreeting.sayHello("Konnichiwa");

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
