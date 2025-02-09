/*TASK1.Sum the properties */
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum; // 650
}
  
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); // 650




/*TASK2. Count properties
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.*/

function count(obj) {
    return Object.keys(obj).length;
}



