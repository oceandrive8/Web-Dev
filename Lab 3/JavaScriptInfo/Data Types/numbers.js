/*TASK1. Sum numbers from the visitor*/
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );




/*TASK2. Why 6.35.toFixed(1) == 6.3? 
According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:*/
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3
/*In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
 How to round 6.35 the right way?*/

//Answer:
//The reason 6.35 is rounded to 6.3 instead of 6.4 is due to the floating-point precision issues in JavaScript.
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded)->6.4



/*TASK3. Repeat until the input is a number*/

function readNumber() {
    let value;
    while (true) {
      value = prompt("Enter a number:", "");
      if (value === "" || value === null) {
        return null;
      }
      if (!isNaN(value)) {
        return +value;
      }
      alert("That's not a valid number. Please try again.");
    }
  }
let number = readNumber();
alert(`Read: ${number}`);





/*TASK4. An occasional infinite loop 
This loop is infinite. It never ends. Why?*/
let i = 0;
while (i != 10) {
  i += 0.2;
}
//That’s because i would never equal 10.




/*TASK5. A random number from min to max
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:*/
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525




function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );







/*TASK6.  A random integer from min to max
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:*/

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5




function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
alert( randomInteger(1, 3) );

