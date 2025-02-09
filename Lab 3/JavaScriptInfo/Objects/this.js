/*TASK1. Using "this" in object literal 
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? RESULT: an error
/*The result of user.ref.name will be undefined.
This is because in the function makeUser, this refers to the global object (in non-strict mode), not the user object, and the global object does not have a name property. */

//Fixed one:
function makeUser() {
    return {
      name: "John",
      ref: {} // Explicitly create an empty object for ref
    };
  }
  
let userr = makeUser();
userr.ref = userr; // Set ref to point to the user object itself
alert(userr.ref.name); // "John"







/* TASK2. Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert(calculator.sum());
alert(calculator.mul());









/*TASK3. Chaining */
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0